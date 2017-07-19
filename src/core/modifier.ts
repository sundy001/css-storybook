import { Styleable } from './Styleable';

export class Modifier extends Styleable {
  public addElement(element) {
    this.addChild(element);
  }
}
