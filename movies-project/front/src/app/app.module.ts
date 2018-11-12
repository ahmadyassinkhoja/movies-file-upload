import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';

import { MoviesService } from './movies/movies.service' 

import { AppRoutingModule } from './app-routing.module'

// import { AngularFileUploaderModule } from "angular-file-uploader";
import { FileSelectDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    // AngularFileUploaderModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
