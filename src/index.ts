import { CSSStory } from './core/cssstory';

const cs = new CSSStory();

cs
  .b('modal')
    .e('header')
    .e('body')
    .e('footer');

console.dir(cs);

// declare let $: any;
// for (const block of cs.blocks) {
//   const $block = $(`<li>${block.name}</li>`)
//     .appendTo('#menu');

//   if (block.children.length) {
//     let $list = $('<ul></ul>');
//     $block.append($list);

//     for (const element of block.children) {
//       $list.append(`<li>${element.name}</li>`);
//     }
//   }
// }
