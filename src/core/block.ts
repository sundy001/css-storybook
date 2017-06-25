import { Element } from './element';
import { Modifier } from './modifier';
import { Styleable } from './styleable';

export class Block extends Styleable {
  public addElement(element: Element) {
    this.addChild(element);
  }

  public addModifier(modifier: Modifier) {
    this.addChild(modifier);
  }
}
