
export class StyleSheetConventor {
  public convert(obj:any) {
    let stack = Object.keys(obj).reverse();
    let currentBlock = obj;
    let currentKey = null;
    let cssString = '';

    while (0 === stack.length) {
      currentKey = stack[stack.length - 1];

      if (this.isNestedKey(currentKey)) {
        currentBlock = currentBlock[currentKey];
      } else {
        cssString += currentKey + ' {';
        for (const key in currentBlock) {
          cssString += `${key}: ${obj[key]};`;
        }
        cssString += '}';
      }
    }

    return cssString
  }

  private isNestedKey(key: string): boolean {
    return 0 === key.indexOf('@');
  }
}
