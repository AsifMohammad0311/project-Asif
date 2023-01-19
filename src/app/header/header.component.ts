import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WatchService } from '../watch.service';

declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginStatus: any;
  user: any;
  registerForm: FormGroup;
  registerInfo: any;
  countries:any;
  cartItems: any;

  constructor(private service: WatchService,private  toastr: ToastrService,
     private formbuilder: FormBuilder, private router: Router) {
      this.cartItems=[],
    this.registerForm = this.formbuilder.group({
      Id: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      street: new FormControl(''),
      pincode: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      mobileNo: new FormControl(''),
      emailId: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required),
      conpassword: new FormControl('', Validators.required)
    },
      {
        validators: this.mustMatch('password', 'conpassword')
      }
    );
  }

  ngOnInit(): void {
    this.service.getCartStatus().subscribe((data: any) => {
      this.cartItems.push(data);
    });
    this.service.getAllCountries().subscribe((data: any) => {this.countries = data; console.log(data);});

    this.service.getLoginStatus().subscribe((data: any) => {
      this.loginStatus = data;
    })
  }

  LoginUser() {

    jQuery('#loginModel').modal('show');
  }

  RegisterUser() {

    jQuery('#registerModel').modal('show');
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
  register(user: any) {

    this.service.registerUser(user).subscribe((result: any) => {
      this.registerInfo = result;
      jQuery('#registerModel').modal('hide');
      console.log(result);
    });
    this.router.navigate(['aboutus']);
    this.toastr.success("Register success!!")

  }

  get f() {
    return this.registerForm.controls;
  }

  mustMatch(password: any, conpassword: any) {
    return (formGroup: FormGroup) => {
      const passwordc = formGroup.controls[password];
      const conpasswordc = formGroup.controls[conpassword];

      if (passwordc.value !== conpasswordc.value) {
        conpasswordc.setErrors({ mustMatch: true });
      } else {
        conpasswordc.setErrors(null);
      }
    }
  }




}
