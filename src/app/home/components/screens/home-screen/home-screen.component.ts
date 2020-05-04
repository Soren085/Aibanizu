import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/core/services/data/data.service';
import { Subscription } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Playlist } from 'src/app/core/models/playlist';
import { PlayLists } from 'src/app/core/constants/constants';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit, AfterViewInit, OnDestroy {
  isListExpanded: boolean;
  playlistStateSubscription: Subscription;
  playlist: Playlist;

  constructor(
    private http: HttpClient,
    private data: DataService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.randomizePlaylist();
    this.playlistStateSubscription = this.data.currentPlaylistState.subscribe(
      res => {
        this.isListExpanded = res;
      }
    );
  }

  ngOnDestroy(): void {
    this.playlistStateSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
  }

  public togglePlaylist(e: MatSlideToggleChange): void {
    this.data.changePlaylistState(e.checked);
  }

  private randomizePlaylist(): void {
    try {
      const randomPlaylist: number = Math.floor((Math.random() * PlayLists.length));
      this.playlist = {...PlayLists[randomPlaylist]};
      this.playlist.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.playlist.url);
    } catch (error) {
      console.error(error);
    }
  }

}
