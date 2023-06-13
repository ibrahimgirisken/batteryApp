import { ProductService } from './../../services/common/models/product.service';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private productService: ProductService
  ) {
    const _btn = _renderer.createElement('button');
    _btn.setAttribute('class', 'btn btn-danger m-2');
    _btn.textContent = 'Sil';
    _renderer.appendChild(element.nativeElement, _btn);
  }

  @Input() id: string;

  @HostListener('click')
  async onClick() {
    const td: HTMLTableCellElement = this.element.nativeElement;
    await this.productService.delete(this.id);
    $(td.parentElement).fadeOut(2000);
  }
}
