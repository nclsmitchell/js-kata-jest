function add(string) {

  const separators = [',','\\n'];
  const negatives = [];
  const regexp = /^\/\/(\D+)\n/;

  if (string.length == 0) {
    return 0;
  }

  if (string.match(regexp)) {
    separators.push(string.match(regexp)[1]);
  }
  const regex = new RegExp(`[${separators.join('')}]`);

  const list = string.split(regex)
    .filter(item => !isNaN(parseInt(item)) && parseInt(item) < 1000)

  let sum = 0;
  for (let i=0; i<list.length; i++) {
    const parsedItem = parseInt(list[i])
    if (parsedItem < 0) {
      negatives.psuh(parsedItem);
    }
    sum += parsedItem;
  }

  if (negatives.length > 0) {
    throw `Negative numbers are not allowed: ${negatives.join(', ')}`;
  }
  return sum;
}

module.exports = add;
