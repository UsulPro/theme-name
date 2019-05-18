import { getColorName } from '../get-color-name';

describe(__filename, () => {
  it('should find color names', () => {
    const colors = ['#f1c1d1', 'red', 'green', 'blue', 'white', 'black'];
    const withNames = colors.map(color => ({
      color,
      name: getColorName(color),
    }));
    expect(withNames).toMatchInlineSnapshot(`
      Array [
        Object {
          "color": "#f1c1d1",
          "name": "Fairy Tale",
        },
        Object {
          "color": "red",
          "name": "Red",
        },
        Object {
          "color": "green",
          "name": "Hulk Green",
        },
        Object {
          "color": "blue",
          "name": "Blue",
        },
        Object {
          "color": "white",
          "name": "White",
        },
        Object {
          "color": "black",
          "name": "Black",
        },
      ]
    `);
  });
});
