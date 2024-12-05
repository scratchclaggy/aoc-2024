import { assertEquals } from "@std/assert";
import { partOne, partTwo } from "./day_2.ts";

const testInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

Deno.test(function testPartOne() {
  assertEquals(partOne(testInput), 2);
});

Deno.test(function testPartTwo() {
  assertEquals(partTwo(testInput), 4);
});
