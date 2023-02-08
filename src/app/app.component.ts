import { Component } from '@angular/core';
import { Content } from './interfaces/Content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'learningAngular2';
  name: string = 'Scotty';
  contentItem:Content = {
    id: 1024,
    imageUrl:
    'https://angular.io/assets/images/logos/angular/angular .png',
    body: 'This is the body of the content',
        type: 'news'
    }

  contentArray : Content[];

  constructor() {

    this.contentArray = [this.contentItem];
    this.contentArray.push(this.contentItem);
    this.contentArray.push(this.contentItem);
    this.contentArray.push(this.contentItem);
    this.contentArray.push(this.contentItem);
    this.contentArray.push(this.contentItem);
    this.contentArray.push(this.contentItem);
  }

    processContent (content: Content):void { console.log(content.body);
    }

    clickEvent(){
      
    }
}


