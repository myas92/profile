import { Component, OnInit ,HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let about = document.querySelector('#about') as HTMLElement;
      if (window.pageYOffset > about.clientHeight) {
        about.classList.add('nav-underline');
      } else {
        about.classList.remove('nav-underline');
      }
    }
}
