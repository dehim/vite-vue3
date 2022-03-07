<template>
  <div ref="hotRef" class="h-full"></div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, nextTick, onMounted, computed } from 'vue';
  import { columns, searchFormSchema } from './data';
  import Handsontable from '/@/components/HTable';
  import { initHot } from '/@/components/HTable';
  export default defineComponent({
    name: 'HForm',
    props: {
      htSettings: {
        type: Object as PropType<any>,
        default: () => ({
          data: Handsontable.helper.createSpreadsheetData(10, 10),
        }),
      },
    },
    setup(props) {
      const hotRef = ref(null);

      const getHtSettings = computed(() => {
        const { htSettings } = props;
        const defaultOptions: PropType<any> = {
          ...htSettings,
        };
        return defaultOptions as PropType<any>;
      });

      async function init() {
        await nextTick();
        const hot = unref(hotRef);
        if (!hot) {
          return;
        }
        // const appHot_methods = AppHot.methods;
        // if (appHot_methods) {
        //   appHot_methods.init(hot, { ...unref(getHtSettings) });
        // }
        const hotInstance = await initHot(hot, { ...unref(getHtSettings) });
        return hotInstance;
      }
      onMounted(init);

      return {
        hotRef,
        columns,
        searchFormSchema,
      };
    },
  });
</script>
<style>
  .currentRow {
    background-color: #f3f6fa !important;
  }
</style>
