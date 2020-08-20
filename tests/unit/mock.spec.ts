describe("mock test", () => {
  it("mockImplementationOnce", () => {
    const myMockFn = jest
      .fn(() => "default")
      .mockImplementationOnce(() => "first call")
      .mockImplementationOnce(() => "second call");
    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn()); //first call second call default default
  });

  it("mockImplementation ", () => {
    const mockFn = jest.fn().mockImplementation(scalar => 42 + scalar);
    // or: jest.fn(scalar => 42 + scalar);
    const a = mockFn(0);
    console.log(a); //42
    console.log(mockFn.mock.calls); //[[0]]
  });

  it("mockReturnThis", () => {
    const mock = jest.fn();
    // console.log(mock.mockReturnThis()); //mock
  });
  it.only("mockReturnValue", () => {
    const mock = jest.fn();
    mock.mockReturnValue(42);
    console.log(mock()); //42
    mock.mockReturnValue(43);
    console.log(mock()); //43
    console.log(mock()); //43
    mock.mockClear();
    console.log(mock()); //43
    mock.mockReset(); //或者mock.mockRestore
    console.log(mock()); //undifined
  });
  it("mockReturnValueOnce", () => {
    const myMockFn = jest
      .fn()
      .mockReturnValue("default")
      .mockReturnValueOnce("first call")
      .mockReturnValueOnce("second call");

    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
    //'first call', 'second call', 'default', 'default'
  });
});

// const mock = jest.fn();
// {
//   _isMockFunction: true,
//   getMockImplementation: [Function],
//   mock: [Getter/Setter],
//   mockClear: [Function],
//   mockReset: [Function],
//   mockRestore: [Function],
//   mockReturnValueOnce: [Function],
//   mockResolvedValueOnce: [Function],
//   mockRejectedValueOnce: [Function],
//   mockReturnValue: [Function],
//   mockResolvedValue: [Function],
//   mockRejectedValue: [Function],
//   mockImplementationOnce: [Function],
//   mockImplementation: [Function],
//   mockReturnThis: [Function],
//   mockName: [Function],
//   getMockName: [Function]
// }
