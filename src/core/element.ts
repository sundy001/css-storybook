import { Styleable } from './styleable';

export class Element extends Styleable {
  public addModifier(modifier) {
    this.addChild(modifier);
  }
}
