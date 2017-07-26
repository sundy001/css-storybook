import story from '../index';
import {
  disabledModifier,
  expandedModifier,
  hollowModifier,
  sizeModifierGroup,
  themeModifierGroup,
} from './buttonModifiers';

export default function generateButton() {
  story.b('btn', {});
  disabledModifier();
  expandedModifier();
  hollowModifier();
  sizeModifierGroup();
  themeModifierGroup();
}
