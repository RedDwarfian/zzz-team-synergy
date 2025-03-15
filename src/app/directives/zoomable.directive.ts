import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';
import { D3Service } from '../services/d3.service';

@Directive({
  selector: '[zoomableOf]',
  standalone: true
})
export class ZoomableDirective implements OnInit {
  @Input('zoomableOf') zoomableOf!: HTMLElement;
  private d3Service: D3Service = inject(D3Service);

  constructor(private _element: ElementRef) { }

  ngOnInit(): void {
    this.d3Service.applyZoomableBehaviour(this.zoomableOf, this._element.nativeElement);
  }
}
