const isNonNegative = (n: number) => n >= 0;

const isMAS = (
  m: string | undefined,
  a: string | undefined,
  s: string | undefined,
) => m === "M" && a === "A" && s === "S";

const getAllDirections = (x: number, y: number) => [
  [
    [x, y - 1],
    [x, y - 2],
    [x, y - 3],
  ],
  [
    [x + 1, y - 1],
    [x + 2, y - 2],
    [x + 3, y - 3],
  ],
  [
    [x + 1, y],
    [x + 2, y],
    [x + 3, y],
  ],
  [
    [x + 1, y + 1],
    [x + 2, y + 2],
    [x + 3, y + 3],
  ],
  [
    [x, y + 1],
    [x, y + 2],
    [x, y + 3],
  ],
  [
    [x - 1, y + 1],
    [x - 2, y + 2],
    [x - 3, y + 3],
  ],
  [
    [x - 1, y],
    [x - 2, y],
    [x - 3, y],
  ],
  [
    [x - 1, y - 1],
    [x - 2, y - 2],
    [x - 3, y - 3],
  ],
];

const isMS = (m: string | undefined, s: string | undefined) =>
  m === "M" && s === "S";

const getXs = (x: number, y: number) => [
  [
    [x - 1, y - 1],
    [x + 1, y + 1],
  ],
  [
    [x + 1, y - 1],
    [x - 1, y + 1],
  ],
  [
    [x - 1, y + 1],
    [x + 1, y - 1],
  ],
  [
    [x + 1, y + 1],
    [x - 1, y - 1],
  ],
];

export const partOne = (input: string) =>
  input
    .split("\n")
    .map((l) => l.split(""))
    .reduce(
      (acc, row, y, mat) =>
        acc +
        row.reduce(
          (acc, char, x) =>
            char === "X"
              ? acc +
                getAllDirections(x, y).filter(
                  ([[x1, y1], [x2, y2], [x3, y3]]) =>
                    [x3, y3].every(isNonNegative) &&
                    isMAS(
                      mat.at(y1)?.at(x1),
                      mat.at(y2)?.at(x2),
                      mat.at(y3)?.at(x3),
                    ),
                ).length
              : acc,
          0,
        ),
      0,
    );

export const partTwo = (input: string) =>
  input
    .split("\n")
    .map((l) => l.split(""))
    .reduce(
      (acc, row, y, mat) =>
        acc +
        row.reduce(
          (acc, char, x) =>
            char === "A" &&
              getXs(x, y).filter(
                  ([[x1, y1], [x2, y2]]) =>
                    [x1, x2, y1, y2].every(isNonNegative) &&
                    isMS(mat.at(y1)?.at(x1), mat.at(y2)?.at(x2)),
                ).length === 2
              ? acc + 1
              : acc,
          0,
        ),
      0,
    );

try {
  const input = (await Deno.readTextFile("./input/day_4.txt")).trimEnd();

  console.log("Part 1: ", partOne(input));
  console.log("Part 2: ", partTwo(input));
} catch (_e) {
  console.error("Input missing");
}
