import { shallowMount } from "@vue/test-utils";
import demo1 from "@/components/demo1.vue";
import axios from "axios";
import { x } from "../exportjs.js";
describe("demo1.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(demo1, {});
    expect(wrapper.text()).toMatch("msg is 1");
  });
});

describe.only("axios", () => {
  jest.setTimeout(100000);
  test("请求数据done", done => {
    //https://jsonplaceholder.typicode.com/posts/1
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response => {
      expect(response.data.userId).toEqual(1);
      done();
    });
  });

  test("请求数据Promise", () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        expect(response.data.userId).toEqual(1);
      });
  });

  test("请求数据assertions", () => {
    expect.assertions(1); // 断言，必须执行一次expect
    return axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        expect(response.data.userId).toEqual(1);
      });
  });

  test("请求数据async/await", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    expect(response.data.userId).toEqual(1);
  });
});

describe("import js", () => {
  test("import js", () => {
    const val = x();
    console.log(val);
  });
});
