import read from '../asyncAwait';

read('test.txt', 'utf8')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
