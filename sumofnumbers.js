var test = [1, 2, 3, 4];
function sumFor(list){
  let sum = 0;
  for(i = 0; i < list.length; i++){
    sum += list[i];
  }
  return sum;
}
console.log(sumFor(test));

function sumWhile(list){
  let sum = 0;
  let i = 0;
  while(i < list.length){
    sum += list[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(test));

function sumRecursion(num){
  if(num.length === 0){
    return 0;
  }
    return num[0] + sumRecursion(num.slice(1, num.length));
}
console.log(sumRecursion(test));

function sumTheSimpleWay(list){
  return _.reduce(list, function(memo, num){ return memo + num; }, 0);
}
console.log(sumTheSimpleWay(test));