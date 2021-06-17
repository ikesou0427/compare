import { compare1 } from '#/src/using-guard-and-foreach';
import { compare2 } from '#/src/using-index';
import { compare3 } from '#/src/using-guard-and-index';
import { compare4 } from '#/src/using-bucket';

describe('compareテスト', () => {
    describe('using-guard-and-foreach', () => {
        it('長さ5 最初と最後の二つずつが同じID', () => {
            const test1_arr = [{id: "a", value: 1}, {id: "a", value: 4}, {id: "c", value: 4}, {id: "d", value: 23}, {id: "d", value: 2}];
            const test1_result = "ID: a\n値: 5\nID: c\n値: 4\nID: d\n値: 25\n";
            expect(compare1(test1_arr)).toBe(test1_result);
        });

        it('長さ5 最初の二つだけ同じ', () => {
            const test2_arr = [{id: "a", value: 1}, {id: "a", value: 4}, {id: "c", value: 4}, {id: "d", value: 23}, {id: "e", value: 2}];
            const test2_result = "ID: a\n値: 5\nID: c\n値: 4\nID: d\n値: 23\nID: e\n値: 2\n";
            expect(compare1(test2_arr)).toBe(test2_result);
        });
    });

    describe('using-index', () => {
        it('長さ5 最初と最後の二つずつが同じID', () => {
            const test1_arr = [{id: "a", value: 1}, {id: "a", value: 4}, {id: "c", value: 4}, {id: "d", value: 23}, {id: "d", value: 2}];
            const test1_result = "ID: a\n値: 5\nID: c\n値: 4\nID: d\n値: 25\n";
            expect(compare2(test1_arr)).toBe(test1_result);
        });

        it('長さ5 最初の二つだけ同じ', () => {
            const test2_arr = [{id: "a", value: 1}, {id: "a", value: 4}, {id: "c", value: 4}, {id: "d", value: 23}, {id: "e", value: 2}];
            const test2_result = "ID: a\n値: 5\nID: c\n値: 4\nID: d\n値: 23\nID: e\n値: 2\n";
            expect(compare2(test2_arr)).toBe(test2_result);
        });
    });

    describe('using-guard-and-index', () => {
        it('長さ5 最初と最後の二つずつが同じID', () => {
            const test1_arr = [{id: "a", value: 1}, {id: "a", value: 4}, {id: "c", value: 4}, {id: "d", value: 23}, {id: "d", value: 2}];
            const test1_result = "ID: a\n値: 5\nID: c\n値: 4\nID: d\n値: 25\n";
            expect(compare3(test1_arr)).toBe(test1_result);
        });

        it('長さ5 最初の二つだけ同じ', () => {
            const test2_arr = [{id: "a", value: 1}, {id: "a", value: 4}, {id: "c", value: 4}, {id: "d", value: 23}, {id: "e", value: 2}];
            const test2_result = "ID: a\n値: 5\nID: c\n値: 4\nID: d\n値: 23\nID: e\n値: 2\n";
            expect(compare3(test2_arr)).toBe(test2_result);
        });
    });


    describe('using-bucket', () => {
        it('長さ5 最初と最後の二つずつが同じID', () => {
            const test1_arr = [{id: "a", value: 1}, {id: "a", value: 4}, {id: "c", value: 4}, {id: "d", value: 23}, {id: "d", value: 2}];
            const test1_result = "ID: a\n値: 5\nID: c\n値: 4\nID: d\n値: 25\n";
            expect(compare4(test1_arr)).toBe(test1_result);
        });

        it('長さ5 最初の二つだけ同じ', () => {
            const test2_arr = [{id: "a", value: 1}, {id: "a", value: 4}, {id: "c", value: 4}, {id: "d", value: 23}, {id: "e", value: 2}];
            const test2_result = "ID: a\n値: 5\nID: c\n値: 4\nID: d\n値: 23\nID: e\n値: 2\n";
            expect(compare4(test2_arr)).toBe(test2_result);
        });
    });

});