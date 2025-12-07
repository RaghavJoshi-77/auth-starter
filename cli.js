#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- Helper Functions and Constants ---

// Add some color to console output for better user experience
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  red: "\x1b[31m",
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

// --- Main Scaffolding Logic ---

// 1. Get the project name from the command-line arguments
const projectName = process.argv[2]; // array that contains command line arguments
if (!projectName) {
  log(colors.red, "Error: Please specify the project directory.");
  log(colors.reset, "  For example: npx create-next-auth-starter my-app");
  process.exit(1);
}

// 2. Define source and destination paths
const currentDir = process.cwd();
const projectPath = path.join(currentDir, projectName);
const templatePath = __dirname; // The CLI is in the root of the template

// A list of files and directories to ignore when copying
const ignoreList = [
  '.git',
  '.env',
  'node_modules',
  'cli.js', // Don't copy the CLI script itself
];

// 3. Check if the destination directory already exists
if (fs.existsSync(projectPath)) {
  log(colors.red, `Error: Directory "${projectName}" already exists in the current location.`);
  process.exit(1);
}

// 4. Create the project directory and copy files
try {
  log(colors.bright, `Creating a new Next.js auth starter in ${projectPath}...`);
  fs.mkdirSync(projectPath);

  // Read all files and directories from the template source
  const filesToCopy = fs.readdirSync(templatePath);

  for (const item of filesToCopy) {
    const itemPath = path.join(templatePath, item);
    const targetPath = path.join(projectPath, item);

    // Skip items in the ignore list
    if (ignoreList.includes(item)) {
      continue;
    }

    // `fs.cpSync` is a modern and efficient way to copy recursively
    fs.cpSync(itemPath, targetPath, { recursive: true });
  }

} catch (error) {
  log(colors.red, `An error occurred while copying files: ${error.message}`);
  process.exit(1);
}

// 5. Post-installation modifications
log(colors.cyan, 'Customizing project files...');

// Modify the package.json for the new project
const packageJsonPath = path.join(projectPath, 'package.json');
const packageJson = require(packageJsonPath);

// Update the name and remove CLI-specific fields
packageJson.name = projectName;
delete packageJson.bin;
delete packageJson.keywords;
delete packageJson.description;
delete packageJson.author;

fs.writeFileSync(
  packageJsonPath,
  JSON.stringify(packageJson, null, 2)
);

// 6. Display success message with next steps
log(colors.green, `\n✅ Success! Your project "${projectName}" is ready.`);
log(colors.bright, "\nNext steps:");
console.log(`  cd ${projectName}`);
console.log(`  npm install`);
console.log(`  npm run dev`);
console.log("\nHappy coding!");