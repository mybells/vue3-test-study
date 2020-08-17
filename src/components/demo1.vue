<template>
  <div>
    <h3>msg is {{ msg }}</h3>
    <span>count is {{ count }}</span>
    <span>plusOne is {{ plusOne }}</span>
    <button @click="increment">count++</button>
    <div>
      <h3>{{ state.a }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  ref,
  computed,
  watch,
  onMounted,
  onUpdated,
  onUnmounted,
  reactive,
  watchEffect
} from "vue";
// ref包装对象 defineComponent:为了能够在 TypeScript 中提供正确的类型推导
export default defineComponent({
  // template: `
  //   <div>
  //     <span>count is {{ count }}</span>
  //     <span>plusOne is {{ plusOne }}</span>
  //     <button @click="increment">count++</button>
  //   </div>
  // `,
  data() {
    return {
      msg: "msg"
    };
  },
  created() {
    this.msg = "1";
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  unmounted() {
    console.log("unmounted");
  },
  setup(_this, props) {
    console.log(_this, props, "setup");
    // 生命周期执行顺序：setup unmounted! -> unmounted -> setup -> created -> setup mounted -> mounted -> setup updated! -> updated
    // this.msg = "2";//获取不到this实例,报错

    /* reactive state */
    const count = ref(0);
    count.value++;

    /* computed state */
    const plusOne = computed(() => {
      return count.value + 1;
    }); //只读属性
    // const writableComputed = computed(
    //   // read
    //   () => count.value + 1
    //   // write
    //   val => {
    //     count.value = val - 1;
    //   }
    // );

    /* method */
    const increment = () => {
      count.value++;
    };

    /* watch */
    const stop = watch(
      //getter
      () => count.value * 2,
      //callback
      (val, oldVal, onCleanup) => {
        console.log(`count * 2 is ${val}`);
        onCleanup(() => {
          // 清理副作用
          //在回调被下一次调用前
          //在 watcher 被停止前
          console.log(val);
        });
      },
      {
        // lazy?: boolean //lazy与 2.x 的 immediate 正好相反
        // deep?: boolean
        // flush?: 'pre' | 'post' | 'sync'//让回调在 DOM 更新之前或之后或是被同步触发
        // onTrack?: (e: DebuggerEvent) => void
        // onTrigger?: (e: DebuggerEvent) => void// onTrack 和 onTrigger 是两个用于 debug 的钩子，分别在 watcher 追踪到依赖和依赖发生变化的时候被调用，获得的参数是一个包含了依赖细节的 debugger event。
      }
    );
    // stop();//停止观察

    /* lifecycle */
    onMounted(() => {
      console.log(`setup mounted`);
    });
    onUpdated(() => {
      console.log("setup updated!");
    });
    // destroyed 调整为 unmounted
    onUnmounted(() => {
      console.log("setup unmounted");
    });

    /* reactive */
    const state = reactive({
      a: 0
    });
    state.a = 5;
    watchEffect(() => {
      console.log(state);
      // document.body.innerHTML = `count is ${state.a}`;
    });

    /* expose bindings on render context */
    return {
      count,
      plusOne,
      increment,
      state
    };
  }
});

// import { provide, inject } from "vue";
// const CountSymbol = Symbol();
// const Ancestor = {
//   setup() {
//     debugger;
//     // providing a ref can make it reactive
//     const count = ref(0);
//     provide(CountSymbol, count);
//   }
// };
// const Descendent = defineComponent({
//   template: `<div>{{count}}</div>`,
//   setup() {
//     const count = inject(CountSymbol);
//     return {
//       count
//     };
//   }
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
