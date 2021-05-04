// Add your functions here

function map(sourceArray,f){
  let result=[];
  for(let i=0;i<sourceArray.length;i++)
  {
     result.push(f(sourceArray[i]));
  }
  return result;
}
function reduce(sourceArray,cb,starting){
  let r=(!!starting) ? starting: sourceArray[0];
  let i=(!!starting) ? 0 :1;

  for(;i<sourceArray.length;i++){
    r=cb(sourceArray[i],r)
  }
  return r;
}
