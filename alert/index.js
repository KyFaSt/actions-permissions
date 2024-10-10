const fs = require('fs');
const core = require('@actions/core');

const sarifFilePath = core.getInput('sarif_file')

fs.unlink(filePath, (err) => {
  if (err) {
    console.error(`Error deleting file: ${filePath}`, err);
  } else {
    console.log(`File deleted: ${filePath}`);
  }
});