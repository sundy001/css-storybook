import Block from './Block';
import StoryNode from './StoryNode';

export default class RootNode extends StoryNode {
  public addBlock(child: Block): void {
    super.addChild(child);
  }

  public getBlock(name: string): Block {
    return this.getChild(name, 'Block') as Block;
  }

  public hasBlock(name: string): boolean {
    return this.hasChild(name, 'Block');
  }
}
