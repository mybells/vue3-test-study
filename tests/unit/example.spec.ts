import { shallowMount } from "@vue/test-utils";
import demo1 from "@/components/demo1.vue";

describe("demo1.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(demo1, {});
    expect(wrapper.text()).toMatch("msg is 1");
  });
});
