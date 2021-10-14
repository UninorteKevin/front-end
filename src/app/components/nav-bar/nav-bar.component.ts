import { Component, OnInit, DoCheck } from '@angular/core';
import { faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, DoCheck {
  public Identity;

  public faShoppingBag = faShoppingBag;
  public faUserCircle = faUserCircle;
  constructor(private userService: UserService) { }


  ngDoCheck(): void {
    this.loadIdentity();
  }

  ngOnInit(): void {
    this.loadIdentity();
  }

  
  loadIdentity(){
    this.Identity = this.userService.getIdentity();
  }

  onLogout(){
    localStorage.removeItem('identity');
  }
}
