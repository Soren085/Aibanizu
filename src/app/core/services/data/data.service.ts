import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DrawerState } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sidenavOpenState = new BehaviorSubject<boolean>(true);
  // subscribe to currentState to listen for value change
  private sidenavState = this.sidenavOpenState.asObservable();

  private isPlaylistExpanded = new BehaviorSubject<boolean>(false);
  private playlistState = this.isPlaylistExpanded.asObservable();


  constructor() { }

  // change state method
  public changeState(state): void {
    this.sidenavOpenState.next(state);
  }

  public get currentState(): Observable<boolean> {
    return this.sidenavState;
  }

  public changePlaylistState(state): void {
    this.isPlaylistExpanded.next(state);
  }

  public get currentPlaylistState(): Observable<boolean> {
    return this.playlistState;
  }

}
