const isValid = (ruleset: Map<number, Set<number>>) => (arr: Array<number>) => {
  const seen = new Set<number>();

  return arr.every((before) => {
    seen.add(before);

    return !ruleset
      .get(before)
      ?.values()
      .some((after) => seen.has(after));
  });
};

const not =
  <T>(predicate: (value: T) => boolean) =>
  (value: T) =>
    !predicate(value);

const rulesetSort =
  (ruleset: Map<number, Set<number>>) => (l: number, r: number) =>
    ruleset.get(l)?.has(r) ? 1 : -1;

export const partOne = (input: string) => {
  const [rules, manuals] = input.split("\n\n");

  const ruleset = rules
    .split("\n")
    .map((ln) => ln.split("|"))
    .map(([l, r]) => [parseInt(l), parseInt(r)])
    .reduce((map, [k, v]) => {
      if (map.has(k)) map.get(k)!.add(v);
      else map.set(k, new Set([v]));
      return map;
    }, new Map<number, Set<number>>());

  return manuals
    .split("\n")
    .map((ln) => ln.split(",").map((n) => parseInt(n)))
    .filter(isValid(ruleset))
    .map((arr) => arr.at(arr.length / 2)!)
    .reduce((acc, n) => acc + n, 0);
};

export const partTwo = (input: string) => {
  const [rules, manuals] = input.split("\n\n");

  const ruleset = rules
    .split("\n")
    .map((ln) => ln.split("|"))
    .map(([l, r]) => [parseInt(l), parseInt(r)])
    .reduce((map, [k, v]) => {
      if (map.has(k)) map.get(k)!.add(v);
      else map.set(k, new Set([v]));
      return map;
    }, new Map<number, Set<number>>());

  return manuals
    .split("\n")
    .map((ln) => ln.split(",").map((n) => parseInt(n)))
    .filter(not(isValid(ruleset)))
    .map((arr) => arr.sort(rulesetSort(ruleset)).at(arr.length / 2)!)
    .reduce((acc, n) => acc + n, 0);
};

try {
  const input = (await Deno.readTextFile("./input/day_5.txt")).trimEnd();

  console.log("Part 1: ", partOne(input));
  console.log("Part 2: ", partTwo(input));
} catch (_e) {
  console.error("Input missing");
}
