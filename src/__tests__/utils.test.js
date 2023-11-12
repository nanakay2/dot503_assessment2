import {
    addTwoNumbers,
    capitalizeText,
    divideTwoNumbers,
    multiplyTwoNumbers,
    subtractTwoNumbers,
  } from "./utils";
  
  describe("utils", () => {
    it("should add two single digit numbers", () => {
      expect(addTwoNumbers(2, 3)).toBe(5);
    });
    it("should subtract two single digit numbers", () => {
      expect(subtractTwoNumbers(2, 1)).toBe(0);
    });
  
    it("should multiply two single digit numbers", () => {
      expect(multiplyTwoNumbers(2, 3)).toBe(6);
    });
  
    it("should divide two single digit numbers", () => {
      expect(divideTwoNumbers(4, 2)).toBe(1);
    });
  
    it("should capitalize text", () => {
      expect(capitalizeText("hello")).toBe("HELLO");
    });
  });
  