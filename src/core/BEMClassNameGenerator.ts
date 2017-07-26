import IClassNameGenerator from './Interface/IClassNameGenerator';
import Block from './Node/Block';
import Element from './Node/Element';
import Modifier from './Node/Modifier';
import ModifierGroup from './Node/ModifierGroup';
import StoryNode from './Node/StoryNode';
import StyleableNode from './Node/StyleableNode';

type BEMNode = Block | Element | Modifier;

export default class BEMClassNameGenerator implements IClassNameGenerator {
  public getClassName(classNamable: StoryNode): string {
    if (
      !(classNamable instanceof Block) &&
      !(classNamable instanceof Element) &&
      !(classNamable instanceof Modifier)
    ) {
      throw new Error('');
    }

    return this.getStyleableClassName(classNamable);
  }

  private getStyleableClassName(styleable: BEMNode): string {
    let node = styleable;
    let name = '';

    do {
      if (node.name === '') {
        node = node.parent as BEMNode;
        continue;
      }

      name = node.name + name;

      if (node instanceof Element) {
        name = '__' + name;
      } else if (node instanceof Modifier) {
        name = '-' + name;
      } else if (node instanceof ModifierGroup) {
        name = '--' + name ;
      }

      node = node.parent as BEMNode;
    } while (node !== null);

    return name;
  }
}
