import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent implements OnInit {
  @Input() drawer;

  constructor() { }

  ngOnInit(): void {
  }

}
