import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  spinnerName:string
  spinnerType:string
  userlist=[]

  constructor(private spinner: NgxSpinnerService,private UserService:UserServiceService) {
    
   }

  ngOnInit(): void {
    //Spinner
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

    this.UserService.getAllUsers().subscribe(
      res=>{
        this.userlist=res
        console.log(this.userlist)
      }
      ,
      err=>{
        console.log("erreur")
      }
    )

  }

}
