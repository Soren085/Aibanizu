import { Component, OnInit, OnDestroy } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { PlayLists } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-home-player',
  templateUrl: './home-player.component.html',
  styleUrls: ['./home-player.component.scss']
})
export class HomePlayerComponent implements OnInit, OnDestroy {
  isListExpanded: boolean;
  playlistStateSubscription: Subscription;
  playlist: Playlist;

  constructor(
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
