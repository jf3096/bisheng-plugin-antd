const less = require('less');
const deasync = require('deasync');

function parse(str, opts) {
  let done = false;
  let data;
  less.render(str, opts).then((res) => {
    data = res.css;
    done = true;
  }).catch((err) => {
    throw err;
  });
  deasync.loopWhile(() => !done);
  return data;
}

module.exports = parse;
