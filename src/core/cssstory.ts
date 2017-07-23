import Block from './Node/Block';
import Element from './Node/Element';
import Modifier from './Node/Modifier';
import ModifierGroup from './Node/ModifierGroup';
import NodeFactory from './Node/NodeFactory';
import RootNode from './Node/RootNode';
import StoryNode from './Node/StoryNode';
import StyleableNode from './Node/StyleableNode';

export class CSSStory {
  private _rootNode: RootNode;
  private currentNode: StoryNode;
  private currentBlock: Block;
  private currentModifier: Modifier;
  private nodeFactory: NodeFactory;

  public constructor(nodeFactory: NodeFactory) {
    this.nodeFactory = nodeFactory;

    this._rootNode = nodeFactory.createRootNode();

    this.currentBlock = null;
    this.currentModifier = null;
  }

  public get rootNode(): RootNode {
    return this._rootNode;
  }

  public b(name: string, style?: object): CSSStory {
    const hasChild = this._rootNode.hasChild(name, 'Block');

    if (style === undefined) {
      if (!hasChild) {
        throw new Error(`Block '${name}' not found.`);
      }

      this.currentNode = this.currentBlock = this._rootNode.getBlock(name);

      return this;
    } else if (hasChild) {
      throw new Error(`Block '${name}' is arleady exists.`);
    }

    const block: Block = this.nodeFactory.createStyleableNode('b', name, style) as Block;
    this._rootNode.addBlock(block);

    this.currentNode = this.currentBlock = block;
    this.currentModifier = null;

    return this;
  }

  public e(name: string, style?: object): CSSStory {
    if (this.currentBlock === undefined) {
      throw new Error('Block not found in the chain.');
    }

    const hasChild = this.currentBlock.hasElement(name);

    if (style === undefined) {
      if (!hasChild) {
        throw new Error(`Element '${name}' not found in block '${this.currentBlock.name}'.`);
      }

      this.currentNode = this.currentBlock.getElement(name);

      return this;
    } else if (hasChild) {
      throw new Error(`Element '${name}' is arleady exists`);
    }

    const element: Element = this.nodeFactory.createStyleableNode('e', name, style) as Element;
    this.currentBlock.addElement(element);

    this.currentNode = element;

    return this;
  }

  public m(name: string, style?: object): CSSStory {
    if (this.currentBlock === undefined) {
      throw new Error('Block not found in the chain.');
    }

    const modifierGroup = this.currentBlock.getModifierGroup('');
    const hasChild = modifierGroup.hasModifier(name);

    if (style === undefined) {
      if (!hasChild) {
        throw new Error(`Modifier '${name}' not found in block '${this.currentBlock.name}'.`);
      }

      this.currentNode = this.currentModifier = this.currentBlock.getModifier(name);

      return this;
    } else if (hasChild) {
      throw new Error(`Modifier '${name}' is arleady exists`);
    }

    const modifier: Modifier = this.nodeFactory.createStyleableNode('m', name, style) as Modifier;
    modifierGroup.addModifier(modifier);

    this.currentNode = this.currentModifier = modifier;

    return this;
  }

  public g(name: string, styles?: {[name: string]: object}): CSSStory {
    if (this.currentBlock === undefined) {
      throw new Error('Block not found in the chain.');
    }

    const hasChild = this.currentBlock.hasModifierGroup(name);

    if (styles === undefined) {
      if (!hasChild) {
        throw new Error(`Modifier group '${name}' not found in block '${this.currentBlock.name}'.`);
      }

      this.currentNode = this.currentBlock.getModifierGroup(name);

      return this;
    } else if (hasChild) {
      throw new Error(`Modifier group '${name}' is arleady exists`);
    }

    const modifierGroup = this.nodeFactory.createStoryNode('g', name) as ModifierGroup;
    Object.keys(styles).forEach((modifierName) => {
      const modifier = this.nodeFactory.createStyleableNode('m', modifierName, styles[modifierName]) as Modifier;
      modifierGroup.addModifier(modifier);
    });

    this.currentBlock.addModifierGroup(modifierGroup);

    this.currentNode = modifierGroup;

    return this;
  }

  public me(name: string, style: object): CSSStory {
    if (this.currentModifier === undefined) {
      throw new Error('Modifier not found in the chain.');
    }

    const hasChild = this.currentModifier.hasElement(name);

    if (style === undefined) {
      if (!hasChild) {
        throw new Error(`Element '${name}' not found in modifier '${this.currentModifier.name}'.`);
      }

      this.currentNode = this.currentModifier.getElement(name);

      return this;
    } else if (hasChild) {
      throw new Error(`Element '${name}' is arleady exists`);
    }

    const element: Element = this.nodeFactory.createStyleableNode('e', name, style) as Element;
    this.currentModifier.addElement(element);
    this.currentNode = element;

    return this;
  }

  public get(): StoryNode {
    return this.currentNode;
  }
}
