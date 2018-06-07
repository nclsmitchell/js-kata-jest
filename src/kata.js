const separator = ',';

function add(string) {
  if (string.length > 0) {
    const sum = string.split(separator).reduce((acum, item) => {
      return parseInt(acum) + parseInt(item);
    })
    return parseInt(sum);
  }
  return 0;
}

module.exports = add;
