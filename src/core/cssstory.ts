import { Block } from './block';
import { Element } from './element';
import { Modifier } from './modifier';
import { Styleable } from './styleable';

export class CSSStory {
  private blocks: Block[];
  private currentBlock: Block;
  private currentElement: Element;
  private currentModifier: Modifier;

  public constructor() {
    this.blocks = [];

    this.currentBlock = null;
    this.currentElement = null;
    this.currentModifier = null;
  }

  public b(name: string): CSSStory {
    const block: Block = this.create('b', name) as Block;

    this.blocks.push(block);
    this.currentBlock = block;
    this.currentElement = null;
    this.currentModifier = null;

    return this;
  }

  public e(name: string): CSSStory {
    const element: Element = this.create('e', name) as Element;

    this.currentBlock.addElement(element);
    this.currentElement = element;

    return this;
  }

  public m(name: string): CSSStory {
    const modifier: Modifier = this.create('m', name) as Modifier;

    this.currentBlock.addModifier(modifier);
    this.currentModifier = modifier;

    return this;
  }

  public me(name: string): CSSStory {
    const element: Element = this.create('e', name) as Element;

    this.currentModifier.addElement(element);

    return this;
  }

  public em(name: string) {
    const modifier: Modifier = this.create('m', name) as Modifier;

    this.currentElement.addModifier(modifier);

    return this;
  }

  private create(type: 'b' | 'e' | 'm', name: string): Styleable {
    let styleable = null;
    if (type === 'b') {
      styleable = new Block();
    } else if (type === 'e') {
      styleable = new Element();
    } else if (type === 'm') {
      styleable = new Modifier();
    }

    styleable.name = name;

    return styleable;
  }
}
