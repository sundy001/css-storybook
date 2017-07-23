import IStyleable from '../Interface/IStyleable';
import StoryNode from './StoryNode';

export default class StyleableNode extends StoryNode implements IStyleable {
  private _style: object;

  constructor() {
    super();

    this._style = {};
  }

  public get style() {
    return this._style;
  }

  public set style(value) {
    this._style = value;
  }
}
