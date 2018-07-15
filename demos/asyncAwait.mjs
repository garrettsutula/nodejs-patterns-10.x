import read from '../asyncAwait.mjs';

read('test.txt')
.then((result) =>{
  console.log(result);
})
.catch((err)=>{
  console.log(err)
})
