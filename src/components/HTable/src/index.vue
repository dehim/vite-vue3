<script lang="ts">
  import 'handsontable/dist/handsontable.full.css';
  import Handsontable from 'handsontable';
  import 'handsontable/languages/zh-CN';
  // import { Ref } from 'vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Hot',
    methods: {
      // 初始化handsontable
      // const dom = ref<HTMLElement | null>(null);
      async init(element, hotSettings) {
        let promise = new Promise(function (resolve, reject) {
          try {
            // const instance = 'test_dehim';
            // console.log(element, hotSettings);
            const instance = new Handsontable(element as HTMLElement, hotSettings);
            resolve(instance);
          } catch (e) {
            reject(e);
          }
        });
        return promise;
      },
    },
    // setup() {
    //   // const dom: Ref<HTMLElement | null> = ref(null);
    //   const dom = ref<HTMLElement | null>(null);
    //   const init = (hotSettings) => {
    //     let promise = new Promise(function (resolve, reject) {
    //       try {
    //         const intance = new Handsontable(dom.value as HTMLElement, hotSettings);
    //         resolve(intance);
    //       } catch (e) {
    //         reject(e);
    //       }
    //     });
    //     return promise;
    //   };
    //   return { Handsontable, init };
    // },
    // render() {
    //   return h('div');
    // },
  });
</script>
