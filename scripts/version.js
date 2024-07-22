const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting version update process...');

function getLastTag() {
  try {
    return execSync("git tag --sort=-v:refname | grep -E '^v[0-9]+\\.[0-9]+\\.[0-9]+$' | head -n 1")
      .toString()
      .trim()
      .replace(/^v/, '');
  } catch (error) {
    console.log('No existing tag found, starting from 0.0.0');
    return '0.0.0';
  }
}

function incrementVersion(version) {
  const parts = version.split('.');
  parts[2] = (parseInt(parts[2]) + 1).toString();
  return parts.join('.');
}

function getCurrentBranch() {
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
}

const lastTag = getLastTag();
console.log(`Last tag found: v${lastTag}`);

const newVersion = incrementVersion(lastTag);
console.log(`New version: v${newVersion}`);

const currentBranch = getCurrentBranch();
if (currentBranch !== 'main' && currentBranch !== 'master') {
  console.warn(`Warning: You are not on the 'main' or 'master' branch. Current branch: ${currentBranch}`);
}

// Update package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
let packageJson;
try {
  const fileContent = fs.readFileSync(packageJsonPath, 'utf8');
  packageJson = JSON.parse(fileContent);
  console.log(`Current version in package.json: ${packageJson.version}`);
} catch (error) {
  console.error('Error reading package.json:', error);
  process.exit(1);
}

packageJson.version = newVersion;

try {
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`Successfully updated package.json with new version: ${newVersion}`);
} catch (error) {
  console.error('Error writing to package.json:', error);
  process.exit(1);
}

console.log('Version update process completed successfully.');
console.log(`New tag v${newVersion} is ready to be created and pushed manually.`);
