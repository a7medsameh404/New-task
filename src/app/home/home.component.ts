import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  newsPaper:any = [];
  lastNews:any = [];
  imgPrix:string = "assets/Image/ABCN_StreamingNow_v01_GL_hpMain_16x9_608.jpg";
  
  constructor(private _AuthService:AuthService) {
    this._AuthService.getApisData().subscribe((res)=>{
      this.newsPaper = res;
      console.log(res);
    })
    this._AuthService.getNews().subscribe((data)=>{
      this.lastNews = data.News.splice(0,5);
      console.log(data);
      
    })
    
   }
   getPasts(term: string) {
    this._AuthService.getNews().subscribe((res)=>{
      this.lastNews = res.News;
      let results:any=this.lastNews.filter((word: { categoryID: string; }) => word.categoryID == `${term}`)
      this.lastNews = results;
      console.log(this.lastNews);
   })  
  }

  ngOnInit(): void {
  }

}
