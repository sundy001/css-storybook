import StoryNode from '../Node/StoryNode';

export default interface IClassNameGenerator {
  getClassName(classNamable: StoryNode): string;
}
