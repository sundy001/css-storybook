define("core/styleable", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Styleable {
        constructor() {
            this.children = [];
            this.parent = null;
            this.style = null;
            this.name = '';
        }
        set name(name) {
            this._name = name;
        }
        get name() {
            return this._name;
        }
        set style(style) {
            // TODO:
        }
        get style() {
            return null;
        }
        getSelector() {
            // TODO:
        }
        addChild(child) {
            child.parent = this;
            this.children.push(child);
        }
    }
    exports.Styleable = Styleable;
});
define("core/element", ["require", "exports", "core/styleable"], function (require, exports, styleable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Element extends styleable_1.Styleable {
        addModifier(modifier) {
            this.addChild(modifier);
        }
    }
    exports.Element = Element;
});
define("core/modifier", ["require", "exports", "core/styleable"], function (require, exports, styleable_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Modifier extends styleable_2.Styleable {
        addElement(element) {
            this.addChild(element);
        }
    }
    exports.Modifier = Modifier;
});
define("core/block", ["require", "exports", "core/styleable"], function (require, exports, styleable_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Block extends styleable_3.Styleable {
        addElement(element) {
            this.addChild(element);
        }
        addModifier(modifier) {
            this.addChild(modifier);
        }
    }
    exports.Block = Block;
});
define("core/cssstory", ["require", "exports", "core/block", "core/element", "core/modifier"], function (require, exports, block_1, element_1, modifier_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CSSStory {
        constructor() {
            this.blocks = [];
            this.currentBlock = null;
            this.currentElement = null;
            this.currentModifier = null;
        }
        b(name) {
            const block = this.create('b', name);
            this.blocks.push(block);
            this.currentBlock = block;
            this.currentElement = null;
            this.currentModifier = null;
            return this;
        }
        e(name) {
            const element = this.create('e', name);
            this.currentBlock.addElement(element);
            this.currentElement = element;
            return this;
        }
        m(name) {
            const modifier = this.create('m', name);
            this.currentBlock.addModifier(modifier);
            this.currentModifier = modifier;
            return this;
        }
        me(name) {
            const element = this.create('e', name);
            this.currentModifier.addElement(element);
            return this;
        }
        em(name) {
            const modifier = this.create('m', name);
            this.currentElement.addModifier(modifier);
            return this;
        }
        create(type, name) {
            let styleable = null;
            if (type === 'b') {
                styleable = new block_1.Block();
            }
            else if (type === 'e') {
                styleable = new element_1.Element();
            }
            else if (type === 'm') {
                styleable = new modifier_1.Modifier();
            }
            styleable.name = name;
            return styleable;
        }
    }
    exports.CSSStory = CSSStory;
});
define("index", ["require", "exports", "core/cssstory"], function (require, exports, cssstory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const cs = new cssstory_1.CSSStory();
    cs
        .b('modal')
        .e('header')
        .e('body')
        .e('footer');
    console.dir(cs);
});
// declare let $: any;
// for (const block of cs.blocks) {
//   const $block = $(`<li>${block.name}</li>`)
//     .appendTo('#menu');
//   if (block.children.length) {
//     let $list = $('<ul></ul>');
//     $block.append($list);
//     for (const element of block.children) {
//       $list.append(`<li>${element.name}</li>`);
//     }
//   }
// }
