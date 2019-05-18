import nearestColor from 'nearest-color';
import namedColors from 'color-name-list';

const colors = namedColors.reduce(
  (o, { name, hex }) => Object.assign(o, { [name]: hex }),
  {},
);

const nearest = nearestColor.from(colors);

export const getColorName = color => nearest(color).name;
