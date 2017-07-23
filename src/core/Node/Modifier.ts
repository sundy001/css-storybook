import Element from './Element';
import StyleableNode from './StyleableNode';

export default class Modifier extends StyleableNode {
  public addElement(element: Element): void {
    this.addChild(element);
  }

  public getElement(name: string): Element {
    return this.getChild(name, 'Element') as Element;
  }

  public hasElement(name: string): boolean {
    return this.hasChild(name, 'Element');
  }
}
