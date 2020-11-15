import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor( 
                private route: ActivatedRoute,
                private service: SpotifyService
                ) { 

    this.loading = true;              
    this.route.params.subscribe( params =>  {
      this.getArtist(params.id)
      this.getTopTracks(params.id)
    })

  }
  
  getArtist(id: string){
    this.loading = true;
    this.service.getArtista(id).subscribe( artista =>  {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks( id: string ){
    this.service.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
      console.log(data)
    }) 
  }
  

}
