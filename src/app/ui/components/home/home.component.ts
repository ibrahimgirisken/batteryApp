import { Component,OnDestroy, OnInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() { }

  ngOnInit(): void {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('navbar-absolute');
    }
  }

  ngOnDestroy(): void {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.remove('navbar-absolute');
    }
  }

}

