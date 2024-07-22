const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting pre-commit hook...');

try {
  console.log('Running version update script...');
  execSync('node version.js', { stdio: 'inherit' });
  console.log('Version update completed successfully.');

  // Добавляем измененный package.json в индекс Git
  execSync('git add package.json', { stdio: 'inherit' });
  console.log('Updated package.json added to Git index.');

  console.log('Pre-commit hook completed successfully.');
  process.exit(0);
} catch (error) {
  console.error('Error in pre-commit hook:', error.message);
  process.exit(1);
}
