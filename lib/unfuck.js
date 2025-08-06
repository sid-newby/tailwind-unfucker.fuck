const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function unfuck(options = {}) {
  const { mode = 'full' } = options;
  
  console.log('\n🔍 Analyzing your Tailwind setup...');
  
  // Find existing config files
  const projectRoot = process.cwd();
  const configPaths = {
    tailwind: findFile(['tailwind.config.js', 'tailwind.config.ts']),
    globals: findFile([
      'src/app/globals.css',
      'app/globals.css',
      'src/styles/globals.css',
      'styles/globals.css',
      'globals.css'
    ])
  };
  
  // Backup existing configs
  if (mode === 'full') {
    backupConfigs(configPaths);
  }
  
  // Apply fixes
  console.log('\n☢️  Applying nuclear configuration...');
  
  if (!configPaths.tailwind) {
    console.log('   Creating new tailwind.config.js...');
    const templatePath = path.join(__dirname, '..', 'templates', 'tailwind.config.template.js');
    fs.copyFileSync(templatePath, path.join(projectRoot, 'tailwind.config.js'));
  } else if (mode === 'init') {
    console.log('   Found existing tailwind.config.js');
    console.log('   ⚠️  Add the nuclear preset manually or run without "init" to overwrite');
  } else {
    console.log('   Updating tailwind.config.js...');
    const templatePath = path.join(__dirname, '..', 'templates', 'tailwind.config.template.js');
    fs.copyFileSync(templatePath, configPaths.tailwind);
  }
  
  if (!configPaths.globals) {
    console.log('   Creating globals.css with CSS variables...');
    const templatePath = path.join(__dirname, '..', 'templates', 'globals.template.css');
    fs.copyFileSync(templatePath, path.join(projectRoot, 'globals.css'));
  } else if (mode === 'init') {
    console.log('   Found existing globals.css at', configPaths.globals);
    console.log('   ⚠️  Check if CSS variables are present, add if missing');
  }
  
  console.log('\n✅ Configuration applied!');
  
  // Show next steps
  console.log(`
╔══════════════════════════════════════════════╗
║              NEXT STEPS:                     ║
╠══════════════════════════════════════════════╣
║ 1. Run: npm run build                        ║
║ 2. If warnings persist:                      ║
║    npx tailwind-unfucker emergency           ║
║ 3. Check with:                               ║
║    npx tailwind-unfucker validate            ║
╚══════════════════════════════════════════════╝
`);
}

function findFile(possiblePaths) {
  const projectRoot = process.cwd();
  for (const filePath of possiblePaths) {
    const fullPath = path.join(projectRoot, filePath);
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }
  return null;
}

function backupConfigs(configPaths) {
  console.log('\n📦 Backing up existing configs...');
  const timestamp = Date.now();
  
  if (configPaths.tailwind) {
    const backupPath = configPaths.tailwind.replace('.js', `.backup.${timestamp}.js`);
    fs.copyFileSync(configPaths.tailwind, backupPath);
    console.log(`   ✅ Backed up tailwind.config.js`);
  }
  
  if (configPaths.globals) {
    const backupPath = configPaths.globals.replace('.css', `.backup.${timestamp}.css`);
    fs.copyFileSync(configPaths.globals, backupPath);
    console.log(`   ✅ Backed up globals.css`);
  }
}

module.exports = { unfuck };
