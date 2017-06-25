export abstract class Styleable {
  private children: Styleable[];
  private parent: Styleable;
  private _style: any;
  private _name: string;

  public constructor() {
    this.children = [];
    this.parent = null;
    this.style = null;
    this.name = '';
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set style(style) {
    // TODO:
  }

  public get style(): any {
    return null;
  }

  public getSelector() {
    // TODO:
  }

  protected addChild(child: Styleable) {
    child.parent = this;
    this.children.push(child);
  }
}
