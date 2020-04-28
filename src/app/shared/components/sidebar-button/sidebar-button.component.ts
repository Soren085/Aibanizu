import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent implements OnInit, OnDestroy {
  @Output() openState = new EventEmitter<boolean>();
  private subscription;
  private state: boolean;

  constructor(
    private data: DataService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.subscription = this.data.currentState.subscribe(
      (res) => {
        this.state = res;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // change state of sidebar
  public changeState() {
    this.state = !this.state;
    this.data.changeState(this.state);
    this.openState.emit(this.state);
    // this.cdr.detectChanges();
  }

}
