/**
 * todo リスト
 * - [ ] 3の倍数のときはFizzを返す
 * - [ ] 5の倍数のときはBuzzを返す
 * - [ ] 3と5の倍数のときはFizzBuzzを返す
 * - [ ] それ以外のときはそのままの数を返す
 */

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { fizzBuzz } from "./fizz_buzz.ts";

Deno.test("3の倍数のときはFizzを返す", () => {
    // act
    const actual = fizzBuzz(3);
    // assert
    assertEquals(actual, "Fizz");
});

Deno.test("5の倍数のときはBuzzを返す", () => {
    // act
    const actual = fizzBuzz(5);
    // assert
    assertEquals(actual, "Buzz");
});

Deno.test("3と5の倍数のときはFizzBuzzを返す", () => {
    // act
    const actual = fizzBuzz(15);
    // assert
    assertEquals(actual, "FizzBuzz");
});

Deno.test("それ以外のときはそのままの数を返す", () => {
    // act
    const actual = fizzBuzz(1);
    // assert
    assertEquals(actual, "1");
});

// 3以外の数字での倍数でのテスト
Deno.test("3以外の数字での倍数でのテスト", () => {
    // Arrange
    const arrayOfInt = [3, 6, 9, 12, 18, 99];
    // Act
    arrayOfInt.forEach((int) => {
        const actual = fizzBuzz(int);
        // Assert
        assertEquals(actual, "Fizz");
    });
});