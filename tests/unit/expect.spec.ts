describe("expect test", () => {
  // beforeAll(() => console.log(1));
  // beforeEach(() => console.log(2));
  // afterEach(() => console.log(4));
  // afterAll(() => console.log(3));
  //执行顺序：12424243

  //it是test的别名
  test("doAsync calls both callbacks", () => {
    // expect.assertions(2);
    // function callback1(data) {
    //   expect(data).toBeTruthy();
    // }
    // function callback2(data) {
    //   expect(data).toBeTruthy();
    // }
    // doAsync(callback1, callback2);
  });
  test("1+1==2?", () => {
    expect(1 + 1).toBe(2);
  });
  test("this will be the only test that runs", () => {
    expect(true).toBe(true);
  });
});

describe("grapefruits are healthy", () => {
  test("grapefruits are a fruit", () => {
    expect("grapefruits").toMatch("fruit");
  });
});

// let expect:{
//   extend: [Function],
//   anything: [Function: anything],
//   any: [Function: any],
//   not: {
//     arrayContaining: [Function: arrayNotContaining],
//     objectContaining: [Function: objectNotContaining],
//     stringContaining: [Function: stringNotContaining],
//     stringMatching: [Function: stringNotMatching],
//     toMatchInlineSnapshot: [Function],
//     toMatchSnapshot: [Function],
//     toThrowErrorMatchingInlineSnapshot: [Function],
//     toThrowErrorMatchingSnapshot: [Function]
//   },
//   objectContaining: [Function: objectContaining],
//   arrayContaining: [Function: arrayContaining],
//   stringContaining: [Function: stringContaining],
//   stringMatching: [Function: stringMatching],
//   addSnapshotSerializer: [Function: addSerializer],
//   assertions: [Function: assertions],
//   hasAssertions: [Function: hasAssertions],
//   getState: [Function: getState],
//   setState: [Function: setState],
//   extractExpectedAssertionsErrors: [Function: extractExpectedAssertionsErrors],
//   toMatchInlineSnapshot: [Function],
//   toMatchSnapshot: [Function],
//   toThrowErrorMatchingInlineSnapshot: [Function],
//   toThrowErrorMatchingSnapshot: [Function]
// }
