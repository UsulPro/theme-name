import nearestColor from 'nearest-color';
import namedColors from 'color-name-list';

const colors = namedColors.reduce(
  (o, { name, hex }) => Object.assign(o, { [name]: hex }),
  {},
);

const nearest = nearestColor.from(colors);

export const getColorName = color => {
  try {
    if (!color) return undefined;
    const colorInfo = nearest(color);
    if (!colorInfo) return undefined;
    return colorInfo.name;
  } catch (err) {
    return undefined;
  }
};
