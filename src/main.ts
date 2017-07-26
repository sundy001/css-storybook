import generateButton from './button/button';
import cs, { classNameGenerator } from './index';

generateButton();

(<any>window).classNameGenerator = classNameGenerator;

console.dir(cs);
