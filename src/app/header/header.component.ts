import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean= false;
  userName:any=[]
  constructor(private _AuthService:AuthService)
   { 
     this._AuthService.currentUserData.subscribe((res:any)=>{
       this.userName = res
     })


     this._AuthService.currentUserData.subscribe(()=>{

       if (this._AuthService.currentUserData.getValue()== null) {
         this.isLoggedIn = false;
       }
       else{
         this.isLoggedIn = true;
       }
     })
   }

  logout()
  {
    this._AuthService.logout()
  }

  ngOnInit(): void {
  }

}
