function add(string) {

  const separators = [',','\\n'];
  const negatives = [];
  const single_separator = /\/\/(\D)\n/;
  const multiple_separator = /\[(.*?)\]/g;
  const limit = 1000;

  if (string.length == 0) {
    return 0;
  }

  if (string.match(single_separator)) {
    separators.push(string.match(single_separator)[1]);
  }

  let match = multiple_separator.exec(string);
  if (match) {
    while (match != null) {
        separators.push(match[1]);
        match = multiple_separator.exec(string);
     }
  }

  const list = string.split(new RegExp(`[${separators.join('')}]`))
    .filter(item => !isNaN(parseInt(item)) && parseInt(item) < limit)

  let sum = 0;
  for (let i=0; i<list.length; i++) {
    const parsedItem = parseInt(list[i])
    if (parsedItem < 0) {
      negatives.push(parsedItem);
    }
    sum += parsedItem;
  }

  if (negatives.length > 0) {
    throw `Negative numbers are not allowed: ${negatives.join(', ')}`;
  }
  return sum;
}

module.exports = add;
