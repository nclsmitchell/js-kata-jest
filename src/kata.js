function add(string) {

  const separators = [',','\\n'];
  const negatives = [];
  const regexp = /\/\/(\D)\n/;
  const regexp_2 = /\[(.*?)\]/g;

  if (string.length == 0) {
    return 0;
  }

  if (string.match(regexp)) {
    separators.push(string.match(regexp)[1]);
  }

  let match_2 = regexp_2.exec(string);
  if (match_2) {
    while (match_2 != null) {
        separators.push(match_2[1]);
        match_2 = regexp_2.exec(string);
     }
  }

  const list = string.split(new RegExp(`[${separators.join('')}]`))
    .filter(item => !isNaN(parseInt(item)) && parseInt(item) < 1000)

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
