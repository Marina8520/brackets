module.exports = function check(str, bracketsConfig) {
  let open = [],
      close = [],
      temp = [];
  for( let arr of bracketsConfig) {
    open.push(arr[0]);
    close.push(arr[1]);
  }
  for(let el of str.split('')) {
    for(let bracket of open) {
      if(el === bracket) {
        temp.push(el);
      }
    }
    for(let bracket of close) {
      if(el === bracket) {
        temp.pop(el);
      }
    }
  }
  if(temp.length === 0) {
    return true;
  } else {
    return false;
  }
}
