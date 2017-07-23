import Block from './Block';
import Element from './Element';
import Modifier from './Modifier';
import ModifierGroup from './ModifierGroup';
import RootNode from './RootNode';
import StoryNode from './StoryNode';
import StyleableNode from './StyleableNode';

export default class NodeFactory  {
  public createRootNode(): RootNode {
    return new RootNode();
  }

  public createStyleableNode(type: 'b' | 'e' | 'm', name: string, style: object): StyleableNode {
    let styableNode: StyleableNode;
    if (type === 'b') {
      styableNode = new Block();
    } else if (type === 'e') {
      styableNode = new Element();
    } else if (type === 'm') {
      styableNode = new Modifier();
    }

    styableNode.style = style;
    styableNode.name = name;

    return styableNode;
  }

  public createStoryNode(type: 'g', name: string): StoryNode {
    let storyNode: StoryNode = null;

    if (type === 'g') {
      storyNode = new ModifierGroup();
    }

    storyNode.name = name;

    return storyNode;
  }
}
