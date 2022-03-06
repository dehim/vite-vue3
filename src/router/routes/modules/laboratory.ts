import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const laboratory: AppRouteModule = {
  path: '/laboratory',
  name: 'Laboratory',
  component: LAYOUT,
  redirect: '/laboratory/index1',
  meta: {
    orderNo: 5,
    icon: 'ion:aperture-outline',
    title: t('routes.laboratory.menu'),
  },
  children: [
    {
      path: 'index1',
      name: 'Handsontable1',
      component: () => import('/@/views/laboratory/index1.vue'),
      meta: {
        // affix: true,
        icon: 'simple-icons:about-dot-me',
        title: t('routes.laboratory.index1'),
      },
    },
    {
      path: 'index2',
      name: 'Handsontable2',
      component: () => import('/@/views/laboratory/index2.vue'),
      meta: {
        icon: 'simple-icons:about-dot-me',
        title: t('routes.laboratory.index2'),
      },
    },
  ],
};

export default laboratory;
