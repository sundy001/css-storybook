import BEMClassNameGenerator from './core/BEMClassNameGenerator';
import CSSStory from './core/CSSStory';
import NodeFactory from './core/Node/NodeFactory';

const nodeFactory = new NodeFactory();
const cs = new CSSStory(nodeFactory);

export default cs;

export const classNameGenerator = new BEMClassNameGenerator();
