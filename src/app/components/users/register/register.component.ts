import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;

  public messageResponse: String;
  public statusResponse: String;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = Object();
  }

  addUser(Form){
    this.userService.addUser(this.user).subscribe(
      response => {
          if(response.status == 'SUCCESS'){
            Form.reset();
          }
          this.messageResponse = response.message;
          this.statusResponse = response.status
          if(response.define_error){
            console.log('Log error: ' + response.define_error)
          }
      },
      err => {
        console.log(err as any)
      }
    )
  }
}
