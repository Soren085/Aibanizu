import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/core/services/data/data.service';
import { DrawerState } from 'src/app/core/constants/constants';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() isDrawerOpened: boolean;
  @Input() drawerInitialState;
  drawerSubscription: any;
  drawerState: boolean;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.drawerSubscription = this.data.currentState.subscribe(
      (res) => {
        this.drawerState = res;
      }
    );
  }

  ngOnDestroy(): void {
    this.drawerSubscription.unsubscribe();
  }

}
