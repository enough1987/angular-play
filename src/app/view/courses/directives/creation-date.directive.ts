import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCreationDate]'
})
export class CreationDateDirective implements OnChanges {
  @Input('appCreationDate') date!: Date;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges){
    if(changes['date']){
      const currentDate = new Date();
      const fortnightAway = new Date(Date.now() - 12096e5);
  
      if(!this.date) return;
  
      const time = (new Date(this.date)).getTime();
      
      if(
        time < currentDate.getTime()
        && time >= fortnightAway.getTime()
      ) {
        this.el.nativeElement.style.border = '1px solid green';
      } else if (
        time > currentDate.getTime()
      ) {
        this.el.nativeElement.style.border = '1px solid blue';
      }
    }
  }
}
