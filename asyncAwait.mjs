import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export default async function (path, encoding) {
  let data = await readFile(path, encoding);
  data += ' something else';
  return data;
}
