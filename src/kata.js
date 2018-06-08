function add(string) {

  const separators = [',','\\n'];
  const negatives = [];

  if (string.length > 0) {

    if (string.match(/^\/\/(\D+)\n/)) {
      separators.push(string.match(/^\/\/(\D+)\n/)[1]);
    }
    const regex = new RegExp(`[${separators.join('')}]`);

    const sum = string.split(regex)
      .filter(item => !isNaN(parseInt(item)) && parseInt(item) < 1000)
      .reduce((acum, item) => {
        if (parseInt(acum) < 0) {
          negatives.push(parseInt(acum));
        }
        else if (parseInt(item) < 0) {
          negatives.push(parseInt(item));
        }
        else {
          return parseInt(acum) + parseInt(item);
        }
      })

    if (negatives.length > 0) {
      throw `Negative numbers are not allowed: ${negatives.join(', ')}`;
    }
    return parseInt(sum);
  }
  return 0;
}

module.exports = add;
