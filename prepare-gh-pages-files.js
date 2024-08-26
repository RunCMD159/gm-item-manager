const fs = require('fs');
const path = require('path');

// Function to move files and folders
function moveFilesAndFolders(srcDir, destDir) {
  fs.readdirSync(srcDir).forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    fs.renameSync(srcPath, destPath);
  });
}

// Move files and folders from docs/browser to docs
moveFilesAndFolders('docs/browser', 'docs');

// Copy index.html to 404.html
fs.copyFileSync('docs/index.html', 'docs/404.html');

// Copy xy.svg from docs/media to docs
fs.copyFileSync('docs/media/jsoneditor-icons-STGDAB4I.svg', 'docs/jsoneditor-icons-STGDAB4I.svg');

// Copy xy.svg to ab.svg
fs.copyFileSync('docs/jsoneditor-icons-STGDAB4I.svg', 'docs/mediasoneditor-icons-STGDAB4I.svg');

console.log('All tasks completed successfully.');
