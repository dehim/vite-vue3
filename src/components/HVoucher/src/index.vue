<template>
  <div class="main_panel">
    <header class="main_panel_head"> </header>

    <section class="main_panel_body">
      <div class="main_panel_body_content">
        <div class="main_panel_body_content_table">
          <div ref="hotRef"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, nextTick, onMounted, computed } from 'vue';
  import { columns, searchFormSchema } from './data';
  import Handsontable from '/@/components/HTable';
  import { initHot } from '/@/components/HTable';
  export default defineComponent({
    name: 'HVoucher',
    props: {
      htSettings: {
        type: Object as PropType<any>,
        default: () => ({
          data: Handsontable.helper.createSpreadsheetData(1000, 1000),
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
        // initHot(hot, { ...unref(getHtSettings) });
        const hotInstance = await initHot(hot, { ...unref(getHtSettings) });
        return hotInstance;
        // AppHot.methods.init(hot, { ...unref(getHtSettings) });
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
<style lang="less">
  .main_panel {
    width: 100%;
    box-sizing: border-box;
    top: 0;
    bottom: 0;
    height: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-self: baseline;

    header.main_panel_head {
      padding-right: 8px;
      padding-bottom: 1px;
      align-items: center;
      color: #72767b;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }

    header.main_panel_head > :first-child {
      padding-bottom: 8px;
      flex: 1;
    }

    section.main_panel_body {
      background-color: #fff;
      height: 0;
      flex: 1;
      // 以下会导致text框右边框缩进
      // * {
      //   -webkit-box-sizing: border-box;
      //   box-sizing: border-box;
      // }
      .main_panel_body_content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-bottom: 10px;

        .main_panel_body_content_table {
          flex: 1;
          height: 0;
          overflow: hidden;
          position: relative;
        }
      }

      .main_panel_body_content_footer {
        display: flex;
        text-align: right;
        padding-right: 10px;

        > :first-child {
          text-align: left;
          padding-top: 8px;
          padding-left: 15px;
          flex: 1;
        }
      }
    }
  }
</style>
