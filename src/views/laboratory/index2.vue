<template>
  <AppHVoucher />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { AppHVoucher } from '/@/components/HVoucher';
  import { GITHUB_URL } from '/@/settings/siteSetting';

  export default defineComponent({
    name: 'Handsontable1',
    components: { AppHVoucher },
    setup() {
      return {
        GITHUB_URL,
      };
    },
  });
  // console.log(AppHForm);
</script>
