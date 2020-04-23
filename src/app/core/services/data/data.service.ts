import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DrawerState } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sidenavOpenState = new BehaviorSubject<boolean>(true);
  // subscribe to currentState to listen for value change
  private state = this.sidenavOpenState.asObservable();

  constructor() { }

  // change state method
  public changeState(state) {
    this.sidenavOpenState.next(state);
  }

  public get currentState(): Observable<boolean> {
    return this.state;
  }
}
