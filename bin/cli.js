#!/usr/bin/env node

/**
 * Tailwind CSS Unfucker CLI
 * Run: npx tailwind-unfucker
 */

const { unfuck } = require('../lib/unfuck');
const { emergency } = require('../lib/emergency');
const { validate } = require('../lib/validate');

const args = process.argv.slice(2);
const command = args[0];

console.log(`
╔══════════════════════════════════════════════╗
║   TAILWIND UNFUCKER v1.0 - Nuclear Edition  ║
║         "Because fuck those warnings"        ║
╚══════════════════════════════════════════════╝
`);

async function main() {
  switch (command) {
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
    
    case 'emergency':
    case 'panic':
    case 'fuck':
      console.log('🔥 EMERGENCY MODE ACTIVATED');
      await emergency();
      break;
    
    case 'validate':
    case 'check':
      await validate();
      break;
    
    case 'init':
      console.log('📦 Initializing Tailwind unfuckery...');
      await unfuck({ mode: 'init' });
      break;
    
    default:
      // Default action - full unfuck
      await unfuck({ mode: 'full' });
      break;
  }
}

function showHelp() {
  console.log(`
Usage: npx tailwind-unfucker [command]

Commands:
  (no command)     Apply full unfuckery process
  init             Add config files without overwriting  
  emergency        PANIC MODE - Nuclear safelist everything
  validate         Check for Tailwind warnings
  help             Show this help

Examples:
  npx tailwind-unfucker           # Fix everything
  npx tailwind-unfucker emergency # When shit's on fire
  npx tailwind-unfucker validate  # Just check warnings

Quick Install:
  npm install -D tailwind-unfucker
  
Then use:
  npx tw-unfuck

For when you're really fucked:
  npx tailwind-unfucker emergency && npm run build
`);
}

main().catch(err => {
  console.error('💥 Unfuckery failed:', err.message);
  process.exit(1);
});
