import { Styleable } from './styleable';

export class Modifier extends Styleable {
  public addElement(element) {
    this.addChild(element);
  }
}
