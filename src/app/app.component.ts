import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postText=[
    'Hallo mein Name ist Frederick! Ich bin hier, um neue Freunde zu treffen!',
    'Hallo zusammen. Freut mich, dass ihr hier seid!!',
    'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt',
    'Ich esse gerne Kekse.'
  ];

  postImages = [
    'assets/img/Hamster/1.jpg',
    'assets/img/Hamster/2.jpg',
    'assets/img/Hamster/3.jpg',
    'assets/img/Hamster/4.jpg'
  ]

}
