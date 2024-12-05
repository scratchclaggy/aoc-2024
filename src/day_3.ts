const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

export const partOne = (input: string) =>
  input
    .matchAll(regex)
    .map(([_, a, b]) => parseInt(a) * parseInt(b))
    .reduce((acc, n) => acc + n, 0);

export const partTwo = (input: string) => {
  let total = 0;

  let l = 0;
  let r = input.indexOf("don't", l);
  total += partOne(input.slice(l, r));

  while (r !== -1) {
    l = input.indexOf("do()", r);
    r = input.indexOf("don't", r + 1);
    if (l !== -1) total += partOne(input.slice(l, r));
  }

  return total;
};

try {
  const input = (await Deno.readTextFile("./input/day_3.txt")).trimEnd();

  console.log("Part 1: ", partOne(input));
  console.log("Part 2: ", partTwo(input));
} catch (_e) {
  console.error("Input missing");
}
