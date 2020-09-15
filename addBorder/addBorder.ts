function addBorder(picture: string[]): string[] {
  const lengthOfWall = picture[0].length + 2;

  const wall = '*'.repeat(lengthOfWall);

  console.log(wall);
  console.log(picture);

  picture.unshift(wall); // ?
  picture.push(wall); // ?

  picture; // ?
  picture.length; // ?
  for (let i = 1; i < picture.length - 1; i++) {
    picture[i]; // ?
    picture[i] = '*'.concat(picture[i], '*'); // ?
  }

  return picture;
}

console.log(addBorder(['abc', 'ded']));
