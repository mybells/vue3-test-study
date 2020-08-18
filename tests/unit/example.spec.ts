import { shallowMount } from "@vue/test-utils";
import demo1 from "@/components/demo1.vue";

describe("demo1.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(demo1, {});
    expect(wrapper.text()).toMatch("msg is 1");
  });
  test("1+1==2?", () => {
    expect(1 + 1).toBe(2);
  });
  test("this will be the only test that runs", () => {
    expect(true).toBe(true);
  });
});
