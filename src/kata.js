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

  const sum = string.split(regex)
    .filter(item => !isNaN(parseInt(item)) && parseInt(item) < 1000)
    .reduce((acum, item) => {
      const parsedItem = parseInt(item)
      const parsedAcum = parseInt(acum)
      if (parsedAcum < 0) {
        negatives.push(parsedAcum);
      }
      else if (parsedItem < 0) {
        negatives.push(parsedItem);
      }
      else {
        return parsedAcum + parsedItem;
      }
    })

  if (negatives.length > 0) {
    throw `Negative numbers are not allowed: ${negatives.join(', ')}`;
  }
  return parseInt(sum);
}

module.exports = add;
