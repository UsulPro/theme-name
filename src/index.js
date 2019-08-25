import { getColorName } from './get-color-name';

const getValues = (theme, objName) => {
  const obj = objName ? theme[objName] : theme;
  if (typeof obj !== 'object') {
    return [];
  }
  return Object.values(obj);
};

export const themeName = (theme, ind) => {
  const { name, title, themeName: themeTitle } = theme;
  const providedName = name || title || themeTitle;
  if (providedName) return providedName;
  const colors = [
    ...getValues(theme, 'main'),
    ...getValues(theme, 'accent'),
    ...getValues(theme, 'background'),
    ...getValues(theme, 'text'),
    ...getValues(theme),
  ].slice(0, 2);

  const generatedName = colors
    .map(getColorName)
    .filter(Boolean)
    .reduce((fullName, colorName) => `${fullName} ${colorName}`, '')
    .trim();
  if (generatedName) return generatedName;

  return `theme ${ind}`;
};
