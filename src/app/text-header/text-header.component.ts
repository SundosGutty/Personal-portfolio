import { animate, style, transition, trigger } from "@angular/animations";
import { Component, ElementRef, HostListener, Input } from "@angular/core";

@Component({
    selector: 'text-header-component',
    templateUrl: './text-header.component.html',
})
export class TextHeaderComponent{
    @Input() header: string

}