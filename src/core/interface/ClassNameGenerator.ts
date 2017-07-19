import { Styleable } from '../Styleable';

export interface ClassNameGenerator {
  getClassName(classNamable: Styleable): string;
}