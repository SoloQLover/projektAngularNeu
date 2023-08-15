import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {

  names = ['Marius', 'Franziska', 'Josephine', 'Patrick'];
  texts = ['2 Jahre alt', 'Gräbt gerne Löscher', 'Spielt gerne', 'Hamsterrad-Freak'];
  images = ['assets/img/Hamster/3.jpg', 'assets/img/Hamster/4.jpg',
  'assets/img/Hamster/5.jpg', 'assets/img/Hamster/6.jpg'];

}
