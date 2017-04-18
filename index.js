'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Styleable = function () {
  function Styleable() {
    _classCallCheck(this, Styleable);

    this.children = [];
    this.parent = null;
    this.style = null;
    this.name = '';
  }

  _createClass(Styleable, [{
    key: 'setStyle',
    value: function setStyle(style) {}
  }, {
    key: 'getStyle',
    value: function getStyle() {}
  }, {
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getSelector',
    value: function getSelector() {}
  }, {
    key: '_addChild',
    value: function _addChild(child) {
      child.parent = this;
      this.children.push(child);
    }
  }]);

  return Styleable;
}();

var Block = function (_Styleable) {
  _inherits(Block, _Styleable);

  function Block() {
    _classCallCheck(this, Block);

    return _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this));
  }

  _createClass(Block, [{
    key: 'addElement',
    value: function addElement(element) {
      this._addChild(element);
    }
  }, {
    key: 'addModifier',
    value: function addModifier(modifier) {
      this._addChild(modifier);
    }
  }]);

  return Block;
}(Styleable);

var Element = function (_Styleable2) {
  _inherits(Element, _Styleable2);

  function Element() {
    _classCallCheck(this, Element);

    return _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this));
  }

  _createClass(Element, [{
    key: 'addModifier',
    value: function addModifier(modifier) {
      this._addChild(modifier);
    }
  }]);

  return Element;
}(Styleable);

var Modifier = function (_Styleable3) {
  _inherits(Modifier, _Styleable3);

  function Modifier() {
    _classCallCheck(this, Modifier);

    return _possibleConstructorReturn(this, (Modifier.__proto__ || Object.getPrototypeOf(Modifier)).call(this));
  }

  _createClass(Modifier, [{
    key: 'addElement',
    value: function addElement(element) {
      this._addChild(element);
    }
  }]);

  return Modifier;
}(Styleable);

var CSSStory = function () {
  function CSSStory() {
    _classCallCheck(this, CSSStory);

    this.blocks = [];

    this.currentBlock = null;
    this.currentElement = null;
    this.currentModifier = null;
  }

  _createClass(CSSStory, [{
    key: '_create',
    value: function _create(type, name) {
      var styleable = null;
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
  }, {
    key: 'b',
    value: function b(name) {
      var block = this._create('b', name);

      this.blocks.push(block);
      this.currentBlock = block;
      this.currentElement = null;
      this.currentModifier = null;

      return this;
    }
  }, {
    key: 'e',
    value: function e(name) {
      var element = this._create('e', name);

      this.currentBlock.addElement(element);
      this.currentElement = element;

      return this;
    }
  }, {
    key: 'm',
    value: function m(name) {
      var modifier = this._create('m', name);

      this.currentBlock.addModifier(modifier);
      this.currentModifier = modifier;

      return this;
    }
  }, {
    key: 'me',
    value: function me(name) {
      var element = this._create('e', name);

      this.currentModifier.addElement(element);

      return this;
    }
  }, {
    key: 'em',
    value: function em(name) {
      var modifier = this._create('m', name);

      this.currentElement.addModifier(modifier);

      return this;
    }
  }]);

  return CSSStory;
}();

var cs = new CSSStory();

cs.b('modal').e('header').e('body').e('footer');

console.dir(cs);
