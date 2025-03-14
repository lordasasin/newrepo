import fs from 'fs';
import path from 'path';

export function readDirectory(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error('We have a Error ::', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('We coulddnt find the file :', err);
          return;
        }

        console.log(file);

        if (stats.isDirectory()) {
          readDirectory(filePath);
        }
      });
    });
  });
}

export function createTextFile(directoryPath, textName, text) {
  const filePath = path.join(directoryPath, textName);
  fs.writeFile(filePath, text, (err) => {
    if (err) {
      console.error('We have aError:', err);
    } else {
      console.log('File is created!!!!!');
    }
  });
}
