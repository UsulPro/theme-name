import nearestColor from 'nearest-color';
import namedColors from 'color-name-list';

// nearestColor need objects {name => hex} as input
const colors = namedColors.reduce(
  (o, { name, hex }) => Object.assign(o, { [name]: hex }),
  {},
);

export const nearest = nearestColor.from(colors);

// get closest named color
nearest('#f1c1d1'); // => Fairy Tale
