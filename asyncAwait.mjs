import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export default async function (path) {
  let data = await readFile(path, 'utf8');
  data += ' something else';
  return data;
}
