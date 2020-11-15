import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  nuevasCanciones: any[] = [];
  laoding: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService ) {
    
      this.laoding = true;
      this.error = false;

      this.spotify.getNewReleases()
                  .subscribe( (data: any) => {
                    this.nuevasCanciones = data
                    this.laoding = false;
                  }, (err) => {
                    this.laoding = false;
                    this.error = true;
                    this.mensajeError =  err.error.error.message;
                  }) 

  }


}
