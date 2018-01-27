import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener,
    HostBinding
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiGridsProps {
    children: any[];
    num: number;
    scroll: boolean;
}
@Component({
    selector: 'weui-grids-preview',
    templateUrl: './weui-grids-preview.html',
    styleUrls: ['./weui-grids-preview.scss']
})
export class WeuiGridsPreviewComponent extends ReactComponent<WeuiGridsProps, any> {
    @HostBinding('class.weui-grids') _grid: boolean = true;
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
