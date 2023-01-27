import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../interfaces/Content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit{
  @Input() content: Content;

  constructor(){
    //called before the ngOnInit
    this.content = {
      id: 1024,
      imageUrl:
      'https://angular.io/assets/images/logos/angular/angular .png',
      body: 'This is the body of the content',
          type: 'news'
      }
  }

  ngOnInit(){
  }
}
