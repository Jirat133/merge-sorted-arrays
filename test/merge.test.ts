import { merge } from '../src/merge';

describe("merge function", () => {
    it("should merge and return a sorted array in ascending order", () => {
        const collection_1 = [9, 8, 7, 5];
        const collection_2 = [1, 3, 5];
        const collection_3 = [2, 4, 6];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 8, 9]);
    });

    it("should return empty array if all input arrays are empty", () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([]);
    });
});
