const { addAttributes } = require('../helpers/extend_component');

class Element {
  constructor(parent) {
    this.parent = parent || null;
    this.depth = 0;
    if (this.parent !== null && this.parent !== undefined) {
      this.depth = this.parent.depth + 1;
    }
    this.tag = 'div';
    this.attributes = {};
    this.children = [];
  }

  attr(name, value) {
    if (name === null || name === undefined) {
      return;
    }
    this.attributes[name] = value;
  }

  domName() {
    const { name } = this.attributes;
    if (name !== null && name !== undefined) {
      return name;
    }
    let parentName = 'new';
    if (this.parent !== null && this.parent !== undefined) {
      parentName = this.parent.name || this.parent.tag;
    }
    return `${parentName}[${this.name || this.tag}]`;
  }

  domId() {
    const { id } = this.attributes;
    if (id !== null && id !== undefined) {
      return id;
    }
    let parentName = 'new';
    if (this.parent !== null && this.parent !== undefined) {
      parentName = this.parent.name || this.parent.tag;
    }
    return `${parentName}_${this.name || this.tag}`;
  }

  serializeAttributes() {
    const self = this;
    const serializedAttributesArray = [];
    Object.keys(this.attributes).forEach(function(key) { // eslint-disable-line
      let serializedAttribute = key;
      if (self.attributes[key] !== null && self.attributes[key] !== undefined) {
        serializedAttribute += '=';
        serializedAttribute += `"${self.attributes[key]}"`;
      }
      serializedAttributesArray.push(serializedAttribute);
    });
    return serializedAttributesArray.join(' ');
  }
  padWhiteSpace() {
    return Array(this.depth).join(' ');
  }

  startString() {
    return `${this.padWhiteSpace()}<${this.tag} ${this.serializeAttributes()}>`;
  }

  endString() {
    return `${this.padWhiteSpace()}</${this.tag}>`;
  }
  toString() {
    return `${this.startString()}\n${this.endString()}`;
  }
}

addAttributes(Element, ['id', 'name', 'klass', 'style', 'height', 'width']);

module.exports.Element = Element;
