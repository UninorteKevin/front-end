import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: String;
  public password: String;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log('Accion');
    this.userService.onLogin(this.email,this.password).subscribe(
      
      response => {
        if(response.status === 'SUCCESS'){
          localStorage.setItem('identity', JSON.stringify(response.user));
          this.router.navigate(['/']);
        } else 
          console.log(response.message)
      },
      error => {
        console.log(error as any);
      }
    )
  }
}
