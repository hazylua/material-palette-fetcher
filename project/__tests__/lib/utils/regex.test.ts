import { describe, it, expect } from "vitest";
import { hexColorRegex } from "~/lib/utils/regex";

describe("hexColorRegex", () => {
    it("should match valid 6-character hex colors with a leading #", () => {
        expect(hexColorRegex.test("#a1b2c3")).toBe(true);
        expect(hexColorRegex.test("#A1B2C3")).toBe(true);
        expect(hexColorRegex.test("#123456")).toBe(true);
        expect(hexColorRegex.test("#abcdef")).toBe(true);
        expect(hexColorRegex.test("#ABCDEF")).toBe(true);
    });

    it("should not match invalid hex colors", () => {
        expect(hexColorRegex.test("a1b2c3")).toBe(false); // missing leading #
        expect(hexColorRegex.test("#a1b2c")).toBe(false); // 5 characters
        expect(hexColorRegex.test("#a1b2c3da1b2c3d")).toBe(false);
        expect(hexColorRegex.test("#a1b2c3d")).toBe(false); // 7 characters
        expect(hexColorRegex.test("#a1b2g3")).toBe(false); // invalid character 'g'
        expect(hexColorRegex.test("#a1b2c!")).toBe(false); // invalid character '!'
        expect(hexColorRegex.test("")).toBe(false); // empty string
    });

    it("should be case insensitive", () => {
        expect(hexColorRegex.test("#a1b2c3")).toBe(true);
        expect(hexColorRegex.test("#A1B2C3")).toBe(true);
    });
});
