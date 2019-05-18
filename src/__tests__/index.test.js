import { nearest } from '../index';

it('should find color names', () => {
  const color = '#f1c1d1';
  expect(nearest(color)).toMatchInlineSnapshot(`
    Object {
      "distance": 1,
      "name": "Fairy Tale",
      "rgb": Object {
        "b": 209,
        "g": 193,
        "r": 242,
      },
      "value": "#f2c1d1",
    }
  `);
});
