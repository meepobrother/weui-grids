import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener,
    HostBinding, OnInit
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiGridProps {
    width: number;
    children: any[];
}
@Component({
    selector: 'weui-grid-preview',
    templateUrl: './weui-grid-preview.html',
    styleUrls: ['./weui-grid-preview.scss']
})
export class WeuiGridPreviewComponent extends ReactComponent<WeuiGridProps, any> implements OnInit {
    @HostBinding('class.weui-grid') _grid: boolean = true;
    @HostBinding('style.width.%') _width: number = 33.333;
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    ngOnInit() {
        this._width = this.props.width;
        console.log(this.props);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
