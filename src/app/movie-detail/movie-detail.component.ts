import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppComponent } from '../app.component';
import { MovieDetail } from './movie-detail';
import { Observable } from 'rxjs/Rx';
import { TmdbApiService } from '../tmdb-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  movieDetail: MovieDetail;
  private imageConfig = {};
  private imageDetail = {};
  imageUrl = "";

  


 /* getImageDetail(id){
    var url = "https://api.themoviedb.org/3/movie/"+id+"/images?api_key="+this.keyV3+"&language=en-US&include_image_language=en";
    this.http.get(url)
        .subscribe(
          res => this.imageDetail = res.json(),
          error => this.imageDetail = error.text()
        );
  }*/
  
  ImageUrl(){
    let url: string;
    return "original"; //+ this.movieDetail.poster_path.toString(); //this.imageConfig.secure_base_url;// + "original" + this.movieDetail.poster_path;
  }



  constructor(private tmdbApiService: TmdbApiService) {

  }

 // getMovieDetailById(id) {
    
 //       this.http.get(url)
  //      .subscribe(
   //     data => { this.movieDetail = data.json()},
   //     err => console.error(err),
   //     () => console.log('done')
   //   );
   // }

  ngOnInit() {
    var localExample = "example_data/movie_detail.json";
    var id = 238; // 345 - EWS, 238 - Godfather, 
    //this.getMovieDetailById(movieId);

    this.tmdbApiService.getMovieDetail(345)
      .subscribe(movieDetail => this.movieDetail = movieDetail);

    this.tmdbApiService.getImageConfig()
      .subscribe(imageConfig => this.imageConfig = imageConfig);
    //this.getImageDetail(id);
    //this.getMovieDetailById(id);
    //this.getImageUrl();
  }

}
