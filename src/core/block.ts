import { Element } from './Element';
import { Modifier } from './Modifier';
import { Styleable } from './Styleable';

export class Block extends Styleable {
  public addElement(element: Element) {
    this.addChild(element);
  }

  public addModifier(modifier: Modifier) {
    this.addChild(modifier);
  }
}
