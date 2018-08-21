const less = require('less');
const deasync = require('deasync');

export function compileLess(str) {
  return less.render(str).then((res) => {
    console.log(res.css);
    return res.css;
  });
}

export function compileLessSync(str) {
  let done = false;
  let data = undefined;
  compileLess(str).then((result) => {
    done = true;
    data = result;
  }, (e) => {
    done = true;
    throw e;
  });
  deasync.loopWhile(() => !done);
  return data;
}
