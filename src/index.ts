import { CSSStory } from './core/CSSStory';
import { BEMClassNameGenerator } from './core/BEMClassNameGenerator';
import { StyleSheetGenerator } from './core/StyleSheetGenerator';

const cs = new CSSStory();

cs
  .b('modal', { background: 'red' })
    .e('header', { background: 'green' })
    .e('body', { background: 'blue' })
    .e('footer', { background: 'gray' });

console.dir(cs);
const nameGenerator: BEMClassNameGenerator = new BEMClassNameGenerator();
// const styleSheetGenerator: StyleSheetGenerator = new StyleSheetGenerator(nameGenerator);

// styleSheetGenerator.generate();

declare let $: any;
for (const block of cs.blocks) {
  const $block = $(`<li>${block.name}</li>`)
    .appendTo('#menu');

  if (block.children.length) {
    let $list = $('<ul></ul>');
    $block.append($list);

    for (const element of block.children) {
      $list.append(`<li>${element.name}</li>`);
      console.log(nameGenerator.getClassName(element));
    }
  }
}
