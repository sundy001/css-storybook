import { Block } from './Block';
import { Element } from './Element';
import { Modifier } from './Modifier';
import { Styleable } from './Styleable';

export class CSSStory {
  private _blocks: Block[];
  private currentBlock: Block;
  private currentElement: Element;
  private currentModifier: Modifier;

  public constructor() {
    this._blocks = [];

    this.currentBlock = null;
    this.currentElement = null;
    this.currentModifier = null;
  }

  public get blocks(): Block[] {
    return this._blocks;
  }

  public b(name: string, style: object): CSSStory {
    const block: Block = this.create('b', name, style) as Block;

    this._blocks.push(block);
    this.currentBlock = block;
    this.currentElement = null;
    this.currentModifier = null;

    return this;
  }

  public e(name: string, style: object): CSSStory {
    const element: Element = this.create('e', name, style) as Element;

    this.currentBlock.addElement(element);
    this.currentElement = element;

    return this;
  }

  public m(name: string, style: object): CSSStory {
    const modifier: Modifier = this.create('m', name, style) as Modifier;

    this.currentBlock.addModifier(modifier);
    this.currentModifier = modifier;

    return this;
  }

  public me(name: string, style: object): CSSStory {
    const element: Element = this.create('e', name, style) as Element;

    this.currentModifier.addElement(element);

    return this;
  }

  public em(name: string, style: object) {
    const modifier: Modifier = this.create('m', name, style) as Modifier;

    this.currentElement.addModifier(modifier);

    return this;
  }

  private create(type: 'b' | 'e' | 'm', name: string, style: object): Styleable {
    let styleable = null;
    if (type === 'b') {
      styleable = new Block();
    } else if (type === 'e') {
      styleable = new Element();
    } else if (type === 'm') {
      styleable = new Modifier();
    }

    styleable.name = name;
    styleable.style = style;

    return styleable;
  }
}
