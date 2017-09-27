const camelCase = require('camelcase');

const safeMethodCall = function(object, method) { // eslint-disable-line
  if (object === null || object === undefined) {
    return null;
  }

  if (!object[method]) {
    return null;
  }

  return object[method]();
};

module.exports.addAttributes = function (className, attributes) { // eslint-disable-line
  attributes.forEach((attribute) => {
    className.prototype[camelCase('get-' + attribute)] = function () { // eslint-disable-line
      return this.attributes[attribute] || safeMethodCall(this, camelCase(`default-${attribute}`));
    };

    className.prototype[camelCase(attribute)] = function (key, value) {  // eslint-disable-line
      let attribName = attribute;
      if (attribName === 'klass') {
        attribName = 'class';
      }

      if (value === null || value === undefined) {
        value = key; // eslint-disable-line
      }

      this.attributes[attribName] = value;
      return this;
    };
  });
};

