const { execSync } = require('child_process');

async function validate() {
  console.log('\n🔍 Checking for Tailwind warnings...\n');
  
  try {
    const output = execSync('npm run build 2>&1', { 
      encoding: 'utf-8',
      stdio: 'pipe'
    });
    
    const warnings = output.split('\n').filter(line => 
      line.includes('border-border') ||
      line.includes('bg-background') ||
      line.includes('ring-ring') ||
      line.includes('text-foreground') ||
      line.includes('text-muted-foreground') ||
      line.includes('bg-card') ||
      line.includes('bg-popover')
    );
    
    if (warnings.length === 0) {
      console.log('✅ No Tailwind warnings! You\'re good to go.');
    } else {
      console.log('⚠️  Found Tailwind warnings:\n');
      warnings.forEach(w => console.log('   ', w));
      console.log('\n💡 Fix with: npx tailwind-unfucker emergency');
    }
  } catch (error) {
    // Build might fail but we still want to check for warnings
    const output = error.stdout || error.message || '';
    const warnings = output.split('\n').filter(line => 
      line.includes('border-border') ||
      line.includes('bg-background') ||
      line.includes('ring-ring') ||
      line.includes('text-foreground')
    );
    
    if (warnings.length > 0) {
      console.log('⚠️  Found Tailwind warnings (build failed):\n');
      warnings.forEach(w => console.log('   ', w));
      console.log('\n💡 Fix with: npx tailwind-unfucker emergency');
    } else {
      console.log('❌ Build failed (not due to Tailwind warnings)');
      console.log('   Check your build output for other errors');
    }
  }
}

module.exports = { validate };
