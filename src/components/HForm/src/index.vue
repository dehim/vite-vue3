<template>
  <div ref="hotRef" class="h-full"></div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, nextTick, onMounted, computed } from 'vue';
  import { AppHot } from '/@/components/HTable';
  export default defineComponent({
    name: 'HForm',
    props: {
      htData: {
        type: Object as PropType<any>,
        default: () => ({}),
      },
    },
    setup(props) {
      const hotRef = ref(null);

      const getHtSettings = computed(() => {
        const { htData } = props;

        const data = [
          ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
          ['2019', 10, 11, 12, 13],
          ['2020', 20, 11, 14, 13],
          ['2021', 30, 15, 12, 13],
        ];
        const defaultOptions: PropType<any> = {
          data: data,
          rowHeaders: true,
          colHeaders: true,
          ...htData,
        };
        return defaultOptions as PropType<any>;
      });

      async function init() {
        await nextTick();
        const hot = unref(hotRef);
        if (!hot) {
          return;
        }
        const appHot_methods = AppHot.methods;
        if (appHot_methods) {
          appHot_methods.init(hot, { ...unref(getHtSettings) });
        }
      }
      onMounted(init);

      return {
        hotRef,
      };
    },
  });
</script>
<style>
  .currentRow {
    background-color: #f3f6fa !important;
  }
</style>
