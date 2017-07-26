import story from '../index';

export const disabledModifier = () => {
  story.m('disabled', {
  });
};

export const expandedModifier = () => {
  story.m('expanded', {
  });
};

export const hollowModifier = () => {
  story.m('hollow', {
  });
};

export const sizeModifierGroup = () => {
  story.g('theme', {
    alert: {},
    primary: {},
    secondary: {},
    success: {},
    warning: {},
  });
};

export const themeModifierGroup = () => {
  story.g('size', {
    l: {},
    s: {},
    xs: {},
  });
};
