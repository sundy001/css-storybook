import { ClassNameGenerator } from './interface/ClassNameGenerator';
import { Element } from './Element';
import { Modifier } from './Modifier';
import { Styleable } from './Styleable';

export class BEMClassNameGenerator implements ClassNameGenerator {

  public getClassName(classNamable: Styleable): string {
    if (classNamable instanceof Styleable) {
      return this.getStyleableClassName(classNamable);
    }
  }

  private getStyleableClassName(styleable: Styleable): string {
    let currentStyleable: Styleable = styleable;
    let name: string = '';
    do {
      name = currentStyleable.name + name;

      if (currentStyleable instanceof Element) {
        name = '__' + name;
      } else if (currentStyleable instanceof Modifier) {
        name = '--' + name;
      }

      currentStyleable = currentStyleable.parent;
    } while (null !== currentStyleable);

    return name;
  }
}
