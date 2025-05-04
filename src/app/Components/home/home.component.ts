import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuresList = [
    { imgSrc: './assets/images/features/TechCrunch.png', altText: 'TechCrunch', link: '#' },
    { imgSrc: './assets/images/features/Forbes.png', altText: 'Forbes', link: '#' },
    { imgSrc: './assets/images/features/Business.png', altText: 'Business', link: '#' },
    { imgSrc: './assets/images/features/onDeck.png', altText: 'onDeck', link: '#' },
    { imgSrc: './assets/images/features/image.png', altText: 'Image', link: '#' },
    { imgSrc: './assets/images/features/CNBC.png', altText: 'CNBC', link: '#' }
  ];

}
