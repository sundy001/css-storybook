class Styleable {
  constructor() {
    this.children = [];
    this.parent = null;
    this.style = null;
    this.name = '';
  }

  setStyle(style) {

  }

  getStyle() {
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getSelector() {
  }

  _addChild(child) {
    child.parent = this;
    this.children.push(child);
  }
}

class Block extends Styleable {
  constructor() {
    super();
  }

  addElement(element) {
    this._addChild(element);
  }

  addModifier(modifier) {
    this._addChild(modifier);
  }
}

class Element extends Styleable {
  constructor() {
    super();
  }

  addModifier(modifier) {
    this._addChild(modifier);
  }
}

class Modifier extends Styleable {
  constructor() {
    super();
  }

  addElement(element) {
    this._addChild(element);
  }
}

class CSSStory {
  constructor() {
    this.blocks = [];

    this.currentBlock = null;
    this.currentElement = null;
    this.currentModifier = null;
  }

  _create(type, name) {
    let styleable = null;
    if (type === 'b') {
      styleable = new Block();
    } else if (type === 'e') {
      styleable = new Element();
    } else if (type === 'm') {
      styleable = new Modifier();
    }

    styleable.setName(name);

    return styleable;
  }

  b(name) {
    const block = this._create('b', name);

    this.blocks.push(block);
    this.currentBlock = block;
    this.currentElement = null;
    this.currentModifier = null;

    return this;
  }

  e(name) {
    const element = this._create('e', name);

    this.currentBlock.addElement(element);
    this.currentElement = element;

    return this;
  }

  m(name) {
    const modifier = this._create('m', name);

    this.currentBlock.addModifier(modifier);
    this.currentModifier = modifier;

    return this;
  }

  me(name) {
    const element = this._create('e', name);

    this.currentModifier.addElement(element);

    return this;
  }

  em(name) {
    const modifier = this._create('m', name);

    this.currentElement.addModifier(modifier);

    return this;
  }
}

const cs = new CSSStory();

cs
  .b('modal')
    .e('header')
    .e('body')
    .e('footer');

console.dir(cs);
