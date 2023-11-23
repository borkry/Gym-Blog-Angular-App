import { OnInit, Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[dateFormat]',
    standalone:true
})

export class dateFormatDirective implements OnInit {
    @Input() date! : Date;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        if (this.date) {
            const formattedDate = this.formatDate(this.date); // Formatowanie daty
            this.renderer.setProperty(this.el.nativeElement, 'textContent', formattedDate);
        }
    }

    private formatDate(date: Date): string {
        // Tutaj można użyć dowolnej biblioteki do formatowania daty (np. date-fns, moment.js)
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('pl-PL', options);
      }
    
}