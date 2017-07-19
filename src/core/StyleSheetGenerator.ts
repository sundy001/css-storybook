import { ClassNameGenerator } from './interface/ClassNameGenerator';

export class StyleSheetGenerator {
  private classNameGenerator: ClassNameGenerator;

  public constructor(classNameGenerator: ClassNameGenerator) {
    this.classNameGenerator = classNameGenerator;
  }

  public generate() {
  }
}
