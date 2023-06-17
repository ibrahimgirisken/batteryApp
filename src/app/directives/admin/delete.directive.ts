import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

declare var $: any;

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService
  ) {
    const _btn = _renderer.createElement('button');
    _btn.setAttribute('class', 'btn btn-danger m-2');
    _btn.textContent = 'Sil';
    _renderer.appendChild(element.nativeElement, _btn);
  }

  @Input() id: string;
  @Input() controller: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  @HostListener('click')
  async onClick() {
    const td: HTMLTableCellElement = this.element.nativeElement;
    this.httpClientService.delete({
      controller:this.controller},this.id).subscribe(data=>{
        $(td.parentElement).fadeOut(2000, () => {
          this.callback.emit();
        });
      })
  }
}
