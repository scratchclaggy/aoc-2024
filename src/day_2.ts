const isSafe = (report: Array<number>) =>
  report.every((current, i, a) => {
    const last = a.at(i - 1)!;
    return i === 0 || (current > last && current - last <= 3);
  }) ||
  report.every((current, i, a) => {
    const last = a.at(i - 1)!;
    return i === 0 || (current < last && last - current <= 3);
  });

export const partOne = (input: string) =>
  input
    .split("\n")
    .map((l) =>
      l
        .split(" ")
        .filter((c) => c != "")
        .map((c) => parseInt(c))
    )
    .filter(isSafe).length;

export const partTwo = (input: string) =>
  input
    .split("\n")
    .map((l) =>
      l
        .split(" ")
        .filter((c) => c != "")
        .map((c) => parseInt(c))
    )
    .map((l) =>
      l.reduce(
        (acc, _, i, a) => {
          acc.push(a.slice(0, i).concat(a.slice(i + 1)));
          return acc;
        },
        [] as Array<Array<number>>,
      )
    )
    .filter((l) => l.some(isSafe)).length;

try {
  const input = (await Deno.readTextFile("./input/day_2.txt")).trimEnd();

  console.log("Part 1: ", partOne(input));
  console.log("Part 2: ", partTwo(input));
} catch (_e) {
  console.error("Input missing");
}
