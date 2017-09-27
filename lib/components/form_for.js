const { Element } = require('./element');
const { Input } = require('./input');
const { addAttributes } = require('../helpers/extend_component');

class FormFor extends Element {
  constructor(name, object) {
    super(null);
    this.tag = 'form';
    this.name = name;
    this.object = object || {};
    this.requiredAttributes = this.requiredAttributes.concat(['accept-charset', 'action', 'method', 'url']);
  }

  defaultAcceptCharset(){ // eslint-disable-line
    return 'UTF-8';
  }

  defaultAction() { // eslint-disable-line
    return 'get';
  }

  defaultUrl() { // eslint-disable-line
    return '/';
  }

  emailField(name) { // eslint-disable-line
    const input = new Input(this, name);
    input.type('email');
    this.children.push(input);
    return input;
  }
}

addAttributes(FormFor, ['accept-charset', 'action', 'method', 'url']);


module.exports.FormFor = FormFor;
