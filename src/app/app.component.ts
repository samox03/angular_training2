import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
    title: 'Neat Tree',
    imageUrl: 'assets/southpark.png',
    username: 'slow',
    content: 'I saw this neeat tree today',
  },
    {
      title: 'bottle of tea',
      imageUrl: 'assets/southpark.png',
      username: 'slow2',
      content: 'I ve been in the forest today',
    },
    {
      title: 'blue sky',
      imageUrl: 'assets/southpark.png',
      username: 'slow3',
      content: 'I saw this today',
    },
    {
      title: 'none',
      imageUrl: 'assets/southpark.png',
      username: 'slow3!!!!',
      content: 'I saw nothing',
    }
  ]
}
