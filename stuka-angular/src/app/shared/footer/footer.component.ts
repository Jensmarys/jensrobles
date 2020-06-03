import { Component, OnInit } from '@angular/core';
import { faYoutube, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public faYoutube = faYoutube;
  public faFacebookF = faFacebookF;
  public faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
