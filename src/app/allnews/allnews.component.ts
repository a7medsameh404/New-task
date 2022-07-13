import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.scss']
})
export class AllnewsComponent implements OnInit {

  lastNews:any=[];
  newsPaper:any = [];

  constructor(private _AuthService:AuthService) {
    this._AuthService.getNews().subscribe((data)=>{
      this.lastNews = data.News;
      console.log(data);
      
    })
    this._AuthService.getApisData().subscribe((res)=>{
      this.newsPaper = res;
      console.log(res);
    })
   }

  ngOnInit(): void {
  }

}
