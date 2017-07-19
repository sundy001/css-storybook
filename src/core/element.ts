import { Styleable } from './Styleable';

export class Element extends Styleable {
  public addModifier(modifier) {
    this.addChild(modifier);
  }
}
