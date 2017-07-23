import { CSSStory } from './core/CSSStory';
import NodeFactory from './core/Node/NodeFactory';

const nodeFactory = new NodeFactory();
const cs = new CSSStory(nodeFactory);

cs
  .b('modal', { background: 'red' })
    .e('header', { background: 'green' })
    .e('body', { background: 'blue' })
    .e('footer', { background: 'gray' })
    .m('small', {})
      .me('header', {})
    .m('middle', {})
      .me('header', {})
    .g('size', {
        l: {},
        s: {},
        xl: {},
        xs: {},
    });

cs
  .m('small')
    .me('body', {});

// console.dir(cs);
console.log(cs.b('modal').e('header').get());
