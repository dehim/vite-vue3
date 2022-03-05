import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const laboratory: AppRouteModule = {
  path: '/laboratory',
  name: 'Laboratory',
  component: LAYOUT,
  redirect: '/laboratory/index1',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:aperture-outline',
    title: t('routes.laboratory.menu'),
    orderNo: 5,
  },
  children: [
    {
      path: 'index1',
      name: 'Handsontable',
      component: () => import('/@/views/laboratory/index1.vue'),
      meta: {
        title: t('routes.laboratory.menu'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default laboratory;
