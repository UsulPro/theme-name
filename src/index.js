import { getColorName } from './get-color-name';

export const themeName = theme => {
  const { main = [], accent = [], text = [], background = [] } = theme;
  const colors = [...main, ...accent, ...background, ...text].slice(0, 2);
  const name = colors
    .map(getColorName)
    .reduce((fullName, colorName) => `${fullName} ${colorName}`, '')
    .trim();
  return name;
};
