import { assertEquals } from "@std/assert";
import { partOne, partTwo } from "./day_1.ts";

const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

Deno.test(function testPartOne() {
  assertEquals(partOne(testInput), 11);
});

Deno.test(function testPartTwo() {
  assertEquals(partTwo(testInput), 31);
});
