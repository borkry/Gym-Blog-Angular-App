import { OnInit, Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Directive({
    selector: '[dateFormat]',
    standalone:true
})

export class dateFormatDirective implements OnInit {
    @Input('appPolishDate') date?: Date;

  constructor(private el: ElementRef, private datePipe: DatePipe) {}

  ngOnInit() {
    if (this.date) {
      const formattedDate = this.datePipe.transform(this.date, 'dd.MM.yyyy', 'GMT');
      this.el.nativeElement.textContent = formattedDate;
    }
  }
    
}