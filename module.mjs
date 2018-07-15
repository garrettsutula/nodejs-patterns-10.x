import fs from 'fs';
import util from 'util';

const read = util.promisify(fs.readFile);

function readFile(path) {
  read(path, 'utf8')
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// most other examples use default export (preferred)
// demonstrating the alternative here, useful for swagger controllers
export {
  readFile,
};
