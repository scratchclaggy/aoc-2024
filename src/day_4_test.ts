import { assertEquals } from "@std/assert";
import { partOne, partTwo } from "./day_4.ts";

const testInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

Deno.test(function testPartOne() {
  assertEquals(partOne(testInput), 18);
});

Deno.test(function testPartTwo() {
  assertEquals(partTwo(testInput), 9);
});
