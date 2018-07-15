import read from '../asyncAwait';

read('test.txt')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
