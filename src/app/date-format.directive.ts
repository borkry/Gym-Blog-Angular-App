import { OnInit, Directive, ElementRef, Input, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';

@Directive({
    providers: [DatePipe],
    selector: '[dateFormat]',
    standalone:true
})

export class dateFormatDirective implements OnInit {
  @Input() date!: Date;
  @Input() color!: string;
  oldColor: string = "";

  constructor(private el: ElementRef, private datePipe: DatePipe) {}

  ngOnInit() {
    if (this.date) {
      const formattedDate = "Data dodania postu: "+this.datePipe.transform(this.date, 'dd.MM.yyyy', 'GMT')+"r.";
      this.el.nativeElement.textContent = formattedDate;
      this.oldColor = this.el.nativeElement.style.color;
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.color;
  }
    
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = this.oldColor;
  }
}