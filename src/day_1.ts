export const partOne = (input: string) => {
  const { l, r } = input
    .split("\n")
    .map((line) => line.split(" "))
    .map(([l, _1, _2, r]) => [parseInt(l), parseInt(r)])
    .reduce(
      (acc, [l, r]) => {
        acc.l.push(l);
        acc.r.push(r);

        return acc;
      },
      { l: [], r: [] } as { l: Array<number>; r: Array<number> },
    );

  l.sort();
  r.sort();

  return l.reduce((acc, l, i) => (acc += Math.abs(l - r[i])), 0);
};

export const partTwo = (input: string) => {
  const { l, r } = input
    .split("\n")
    .map((line) => line.split(" "))
    .map(([l, _1, _2, r]) => [parseInt(l), parseInt(r)])
    .reduce(
      (acc, [l, r]) => {
        acc.l.push(l);

        const sumR = acc.r.get(r) ?? 0;
        acc.r.set(r, sumR + 1);

        return acc;
      },
      { l: [], r: new Map() } as { l: Array<number>; r: Map<number, number> },
    );

  return l.reduce((acc, l) => (acc += l * (r.get(l) ?? 0)), 0);
};

try {
  const input = (await Deno.readTextFile("./input/day_1.txt")).trimEnd();

  console.log("Part 1: ", partOne(input));
  console.log("Part 2: ", partTwo(input));
} catch (_e) {
  console.error("Input missing");
}
