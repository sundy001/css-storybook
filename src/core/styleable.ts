export abstract class Styleable {
  private _children: Styleable[];
  private _name: string;
  private _style: object;
  private _parent: Styleable;

  public constructor() {
    this._children = [];
    this._name = '';
    this._style = null;
    this._parent = null;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set style(style: object) {
    this._style = style;
  }

  public get style(): object {
    return this._style;
  }

  public getSelector() {
    // TODO:
  }

  public get children(): Styleable[] {
    return this._children;
  }

  public get parent(): Styleable {
    return this._parent;
  }

  protected addChild(child: Styleable) {
    child._parent = this;
    this._children.push(child);
  }
}
