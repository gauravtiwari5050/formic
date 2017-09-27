const { addAttributes } = require('../helpers/extend_component');

class Input {
  constructor() {
    this.tag = 'input';
  }
}

addAttributes(Input, ['type', 'required']);

module.exports.Input = Input;
