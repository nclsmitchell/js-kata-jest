function add(string) {
  if (string.length > 0) {
    let sum = 0
    const list = string.split(',');
    for (let i=0; i<list.length; i++) {
      sum += parseInt(list[i]);
    }
    return sum;
  }
  return 0;
}

module.exports = add;
