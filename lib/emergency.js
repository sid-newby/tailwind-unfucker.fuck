const fs = require('fs');
const path = require('path');

async function emergency() {
  console.log('\n🚨 APPLYING EMERGENCY FIX...');
  console.log('   This will overwrite your tailwind.config.js with MAXIMUM SAFELIST');
  
  const projectRoot = process.cwd();
  const configPath = path.join(projectRoot, 'tailwind.config.js');
  
  // Backup current config
  if (fs.existsSync(configPath)) {
    const backupPath = configPath.replace('.js', `.backup.${Date.now()}.js`);
    fs.copyFileSync(configPath, backupPath);
    console.log(`   📦 Backed up current config to ${path.basename(backupPath)}`);
  }
  
  // Write emergency config
  const emergencyConfig = `// EMERGENCY TAILWIND CONFIG - NUCLEAR SAFELIST ACTIVATED
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  // NUCLEAR SAFELIST - EVERYTHING THAT COULD POSSIBLY BREAK
  safelist: [
    'border-border',
    'bg-background',
    'bg-foreground',
    'bg-card',
    'bg-card-foreground',
    'bg-popover',
    'bg-popover-foreground',
    'bg-primary',
    'bg-primary-foreground',
    'bg-secondary',
    'bg-secondary-foreground',
    'bg-muted',
    'bg-muted-foreground',
    'bg-accent',
    'bg-accent-foreground',
    'bg-destructive',
    'bg-destructive-foreground',
    'ring-ring',
    'text-foreground',
    'text-primary',
    'text-primary-foreground',
    'text-secondary',
    'text-secondary-foreground',
    'text-muted-foreground',
    'text-destructive',
    'text-destructive-foreground',
    'border',
    'border-input',
    'outline-ring',
    'divide-border',
    // Regex pattern to catch everything
    { pattern: /^(bg|text|border|ring)-(background|foreground|border|input|ring|primary|secondary|muted|accent|destructive|popover|card)(-foreground)?$/ }
  ],
  plugins: [],
}`;
  
  fs.writeFileSync(configPath, emergencyConfig);
  console.log('   ☢️  Emergency config applied!');
  
  console.log(`
╔══════════════════════════════════════════════╗
║            EMERGENCY FIX APPLIED!            ║
╠══════════════════════════════════════════════╣
║ Now run:                                     ║
║   npm run build                              ║
║                                              ║
║ If this doesn't work, you're properly       ║
║ fucked mate 🤷                               ║
╚══════════════════════════════════════════════╝
`);
}

module.exports = { emergency };
