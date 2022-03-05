<template>
  <PageWrapper title="Handsontable">
    <template #headerContent>
      <div class="flex justify-between items-center">
        <span class="flex-1">
          A JavaScript component that combines data grid features with spreadsheet-like UX.
        </span>
      </div>
    </template>
    <Card title="成交占比">
      <div style="flex: 1; height: 600px; overflow: hidden; position: relative">
        <AppHForm />
      </div>
    </Card>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Card } from 'ant-design-vue';
  import { AppHForm } from '/@/components/HForm';
  import { GITHUB_URL } from '/@/settings/siteSetting';

  export default defineComponent({
    name: 'Handsontable1',
    components: { PageWrapper, Card, AppHForm },
    // 模块的名称需要避免关键字冲突，例如命名为menu会提示
    data() {
      return {
        GITHUB_URL,
      };
    },
  });
  // console.log(AppHForm);
</script>
