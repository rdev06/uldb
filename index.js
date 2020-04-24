const fs = require('fs');
class Ldb {
  constructor(filePath) {
    this.filePath = filePath;
  }
  find(cb) {
    fs.readFile(this.filePath, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }
      cb(JSON.parse(data));
    });
  }
  get(key, cb) {
    this.find(data => cb(data[key]));
  }
  set(key, value, cb) {
    this.find(data => {
      data[key] = value;
      fs.writeFile(this.filePath, JSON.stringify(data), err => {
        if (err) {
          console.log(err);
        }
        cb();
      });
    });
  }
  setMany(object, cb) {
    this.find(data => {
      let newData = Object.assign(data, object);
      fs.writeFile(this.filePath, JSON.stringify(newData), err => {
        if (err) {
          console.log(err);
        }
        cb();
      });
    });
  }
  setGet(key, value, cb) {
    this.set(key, value, () => this.get(key, data => cb(data)));
  }
  setGetAll(key, value, cb) {
    this.set(key, value, () => this.find(data => cb(data)));
  }
  unset(key, cb) {
    this.find(data => {
      delete data[key];
      fs.writeFile(this.filePath, JSON.stringify(data), err => {
        if (err) {
          console.log(err);
        }
        cb();
      });
    });
  }
  unsetGetAll(key, cb) {
    this.unset(key, () => this.find(data => cb(data)));
  }
}

module.exports = filePath => new Ldb(filePath);
