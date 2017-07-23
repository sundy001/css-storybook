import Element from './Element';
import Modifier from './Modifier';
import ModifierGroup from './ModifierGroup';
import StoryNode from './StoryNode';
import StyleableNode from './StyleableNode';

export default class Block extends StyleableNode {
  constructor() {
    super();

    const modifierGroup: ModifierGroup = new ModifierGroup();
    modifierGroup.name = '';
    this.addModifierGroup(modifierGroup);
  }

  public addElement(element: Element): void {
    this.addChild(element);
  }

  public addModifierGroup(modifierGroup: ModifierGroup): void {
    this.addChild(modifierGroup);
  }

  public getElement(name: string): Element {
    return this.getChild(name, 'Element') as Element;
  }

  public getModifier(name: string): Modifier {
    const modifierGroup = this.getChildWithType('ModifierGroup');
    if (modifierGroup === undefined) {
      throw Error(`${name} not found`);
    }

    const groupName = Object.keys(modifierGroup).find((key) => modifierGroup[key].hasChild(name, 'Modifier'));

    if (groupName !== undefined) {
      return modifierGroup[groupName].getChild(name, 'Modifier') as Modifier;
    } else {
      throw Error(`${name} not found`);
    }
  }

  public getModifierGroup(name: string): ModifierGroup {
    return this.getChild(name, 'ModifierGroup') as ModifierGroup;
  }

  public hasElement(name: string): boolean {
    return this.hasChild(name, 'Element');
  }

  public hasModifierGroup(name: string): boolean {
    return this.hasChild(name, 'ModifierGroup');
  }
}
