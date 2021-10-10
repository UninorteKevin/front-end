import { Component, OnInit } from '@angular/core';
import { faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public Identity;

  public faShoppingBag = faShoppingBag;
  public faUserCircle = faUserCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
