import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { WatchService } from '../watch.service';
declare var jQuery: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(private service: WatchService, private router: Router,private  toastr: ToastrService) {
  }
  ngOnInit(): void {
    jQuery('#loginModel').modal('show');
  }


  async loginSubmit(loginForm: any) {
    console.log(loginForm);

    // await this.service.userLogin(loginForm).then((data: any) => {
    //     this.user = data;
    //     this.service.setUserLoggedIn();
    //     jQuery('#loginModel').modal('hide');

    //     this.router.navigate(['home']);
    //     alert("login success")
    //});
    if (loginForm.emailId === 'user@gmail.com' && loginForm.password === 'user') {


      this.router.navigate(['home']);

      jQuery('#loginModel').modal('hide');

    }
    else {
      await this.service.userLogin(loginForm).then((data: any) => {
        this.user = data;

      });



      if (this.user != null) {

        this.toastr.success("login success!!")

        this.service.setUserLoggedIn();
        jQuery('#loginModel').modal('hide');


        this.router.navigate(['home']);


      }
      else {
        this.toastr.warning("login failed!!")
        this.router.navigate(['']);

      }
    }
  }
}
