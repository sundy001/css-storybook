import Modifier from './Modifier';
import StoryNode from './StoryNode';

export default class ModifierGroup extends StoryNode {
  public addModifier(modifier: Modifier): void {
    this.addChild(modifier);
  }

  public getModifier(name: string): Modifier {
    return this.getChild(name, 'Modifier') as Modifier;
  }

  public hasModifier(name: string): boolean {
    return this.hasChild(name, 'Modifier');
  }
}
