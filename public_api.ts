import { WeuiGridPreviewComponent } from './weui-grid-preview/weui-grid-preview';
import { WeuiGridSettingComponent } from './weui-grid-setting/weui-grid-setting';

import { WeuiGridsPreviewComponent } from './weui-grids-preview/weui-grids-preview';
import { WeuiGridsSettingComponent } from './weui-grids-setting/weui-grids-setting';

export const both = {
    'weui-grid': {
        setting: WeuiGridSettingComponent,
        view: WeuiGridPreviewComponent
    },
    'weui-grids': {
        setting: WeuiGridsSettingComponent,
        view: WeuiGridsPreviewComponent
    }
};

export const preview = {
    'weui-grid': WeuiGridPreviewComponent,
    'weui-grids': WeuiGridsPreviewComponent
};

export const entrys = [
    WeuiGridSettingComponent,
    WeuiGridPreviewComponent,
    WeuiGridPreviewComponent,
    WeuiGridsPreviewComponent
];

export { WeuiGridProps } from './weui-grid-preview/weui-grid-preview';
export { WeuiGridsProps } from './weui-grids-preview/weui-grids-preview';

