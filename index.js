const fs = require('fs');
const path = require('path');

function tree(directoryPath, prefix = '') {
  const stats = fs.statSync(directoryPath);

  if (!stats.isDirectory()) {
    console.log(prefix + path.basename(directoryPath));
    return;
  }

  console.log(prefix + path.basename(directoryPath) + '/');

  const files = fs.readdirSync(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    tree(filePath, prefix + '  ');
  }
}

const targetDirectory = process.argv[2] || __dirname;
tree(targetDirectory);
