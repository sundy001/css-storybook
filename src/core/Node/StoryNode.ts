export default abstract class StoryNode {
  private _childMap: {
    [typename: string]: {
      [name: string]: StoryNode;
    };
  };
  private _children: StoryNode[];
  private _name: string;
  private _parent: StoryNode;

  public constructor() {
    this._childMap = {};
    this._children = [];
    this._name = '';
    this._parent = null;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public getSelector() {
    // TODO:
  }

  public get children(): ReadonlyArray<StoryNode> {
    return this._children;
  }

  public get parent(): StoryNode {
    return this._parent;
  }

  public hasChild(name: string, type: string): boolean {
    const map = this._childMap[type];
    return map !== undefined && map[name] !== undefined;
  }

  public getChild(name: string, type: string): StoryNode {
    if (!this.hasChild(name, type)) {
      throw Error(`${name} not found`);
    }

    return this._childMap[type][name];
  }

  protected getChildWithType(type: string): { [name: string]: StoryNode; } {
    return this._childMap[type];
  }

  protected addChild(child: StoryNode): void {
    const type = child.constructor.name;
    const map = this._childMap[type];

    if (map !== undefined && map[child.name] !== undefined) {
      throw Error(`${child.name} ${type} is already exists`);
    }

    this.addToChildMap(child);
    this._children.push(child);
    child._parent = this;
  }

  private addToChildMap(node: StoryNode): void {
    let map = this._childMap[node.constructor.name];
    if (map === undefined) {
      map = this._childMap[node.constructor.name] = {};
    }

    map[node.name] = node;
  }
}
