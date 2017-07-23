// import Element from './Node/Element';
// import IClassNameGenerator from './Interface/IClassNameGenerator';
// import Modifier from './Node/Modifier';
// import Styleable from './Node/Styleable';

export class BEMClassNameGenerator {

  // public getClassName(classNamable: Styleable): string {
  //   if (classNamable instanceof Styleable) {
  //     return this.getStyleableClassName(classNamable);
  //   }
  // }

  // private getStyleableClassName(styleable: Styleable): string {
  //   let currentStyleable: Styleable = styleable;
  //   let name: string = '';
  //   do {
  //     name = currentStyleable.name + name;

  //     if (currentStyleable instanceof Element) {
  //       name = '__' + name;
  //     } else if (currentStyleable instanceof Modifier) {
  //       name = '--' + name;
  //     }

  //     currentStyleable = currentStyleable.parent;
  //   } while (null !== currentStyleable);

  //   return name;
  // }
}
