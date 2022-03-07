// import { withInstall } from '/@/utils';

// import appHot from './src/index.vue';

// export const AppHot = withInstall(appHot);

import 'handsontable/dist/handsontable.full.css';
import Handsontable from 'handsontable';
import 'handsontable/languages/zh-CN';
// import { Ref } from 'vue';
// import { defineComponent } from 'vue';

export default Handsontable;

export function initHot(element, hotSettings): any {
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
