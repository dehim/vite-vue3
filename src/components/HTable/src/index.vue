<script lang="ts">
  import 'handsontable/dist/handsontable.full.css';
  import Handsontable from 'handsontable';
  import 'handsontable/languages/zh-CN';
  // import { Ref } from 'vue';
  // import { defineComponent } from 'vue';

  // export default Handsontable;

  export function init(element, hotSettings): any {
    const defaultOptions: PropType<any> = {
      rowHeaders: true,
      colHeaders: true,
      language: 'zh-CN',
      licenseKey: '14005-739E3-66751-EB728-AE038',
      ...hotSettings,
    };
    return new Promise(function (resolve, reject) {
      try {
        const instance = new Handsontable(
          element as Element,
          defaultOptions as Handsontable.GridSettings,
        );
        resolve(instance);
      } catch (e) {
        reject(e);
      }
    });
  }

  // export default defineComponent({
  //   Handsontable,
  //   name: 'Hot',

  //   methods: {
  //     // 初始化handsontable
  //     // const dom = ref<HTMLElement | null>(null);
  //     async init(element, hotSettings) {
  //       const defaultOptions: PropType<any> = {
  //         rowHeaders: true,
  //         colHeaders: true,
  //         language: 'zh-CN',
  //         licenseKey: '14005-739E3-66751-EB728-AE038',
  //         ...hotSettings,
  //       };
  //       return new Promise(function (resolve, reject) {
  //         try {
  //           const instance = new Handsontable(
  //             element as Element,
  //             defaultOptions as Handsontable.GridSettings,
  //           );
  //           resolve(instance);
  //         } catch (e) {
  //           reject(e);
  //         }
  //       });
  //     },
  //   },
  //   // setup() {
  //   //   // const dom: Ref<HTMLElement | null> = ref(null);
  //   //   const dom = ref<HTMLElement | null>(null);
  //   //   const init = (hotSettings) => {
  //   //     let promise = new Promise(function (resolve, reject) {
  //   //       try {
  //   //         const intance = new Handsontable(dom.value as HTMLElement, hotSettings);
  //   //         resolve(intance);
  //   //       } catch (e) {
  //   //         reject(e);
  //   //       }
  //   //     });
  //   //     return promise;
  //   //   };
  //   //   return { Handsontable, init };
  //   // },
  //   // render() {
  //   //   return h('div');
  //   // },
  // });
</script>
