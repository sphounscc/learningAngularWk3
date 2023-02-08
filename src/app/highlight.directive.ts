import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';


@Directive({
  selector: '[appHighlight]' })

export class HighlightDirective implements OnInit {
  @Input () colour: string;
  constructor(private elm: ElementRef) {

  }


  ngOnInit(): void{ //this way we know our colour isn't null
  }

  @HostListener('click') onClick(btn: any){
    this.highlightMe(this.colour);
  }

  private highlightMe(highlightColour: any){
    this.elm.nativeElement.style.backgroundColor =
    highlightColour || 'green';
  }
}