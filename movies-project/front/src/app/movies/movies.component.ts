import { Component, OnInit, DoCheck, EventEmitter } from '@angular/core';

import { MoviesService } from './movies.service'

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/addPhoto';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck {
  movies

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});


  constructor(public movieService: MoviesService) {
    
   }


  ngOnInit() {
    // this.movies = this.movieService.movies
    
    // Getting data from service
    this.movieService.movies.subscribe( (data) => this.movies = data);

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
        //  alert('File uploaded successfully');
     };
  }

  ngDoCheck(){
  }

  addMovie(title,genre,length,photo) {
    console.log(title.value,genre.value,length.value,photo.files[0].name)
    this.uploader.uploadAll()
    this.movieService.addMovie(title,genre,length,photo)
  }

  onDeleteMovie(movie){
    console.log(movie)
    this.movieService.deleteMovie(movie)
  }

}
