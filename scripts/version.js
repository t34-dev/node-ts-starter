/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

console.log('Starting version update process...');

function extractVersion(input) {
  // This regex will match 'v1.2.3' or '1.2.3' with or without additional suffixes
  const match = input.match(/v?(\d+\.\d+\.\d+)/);
  return match ? match[1] : null;
}

function isValidVersion(version) {
  const versionRegex = /^\d+\.\d+\.\d+$/;
  return versionRegex.test(version);
}

function updateVersion(inputVersion) {
  const extractedVersion = extractVersion(inputVersion);

  if (!extractedVersion || !isValidVersion(extractedVersion)) {
    console.error('Error: Invalid version format. Please use the format v1.2.3 or 1.2.3');
    console.error('Additional suffixes after the version number will be ignored.');
    console.error('Example: v1.2.3 or 1.2.3 or v1.2.3-beta');
    process.exit(1);
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

  packageJson.version = extractedVersion;

  try {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`Successfully updated package.json with new version: ${extractedVersion}`);
  } catch (error) {
    console.error('Error writing to package.json:', error);
    process.exit(1);
  }

  console.log('Version update process completed successfully.');
}

// Check if version is provided as an argument
const providedVersion = process.argv[2];

if (providedVersion) {
  updateVersion(providedVersion);
} else {
  console.error('Error: Version not provided. Please run the script with a version argument.');
  console.error('Example: node scripts/version.js v1.2.3 or node scripts/version.js 1.2.3');
  process.exit(1);
}
