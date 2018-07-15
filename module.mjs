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

const moduleExports = {
  readFile,
};

export default moduleExports;
