import { Component, OnInit } from '@angular/core';
import { Musician } from 'src/app/core/models/musician';
import { Musicians } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-home-musicians',
  templateUrl: './home-musicians.component.html',
  styleUrls: ['./home-musicians.component.scss']
})
export class HomeMusiciansComponent implements OnInit {
  listMusician: Musician[];
  currentIndex: number = 0;
  mouseHoldPosition: number;
  isTransitionAllowed: boolean;

  constructor() { }

  ngOnInit(): void {
    this.listMusician = [...Musicians];

    const newItem = this.listMusician[this.listMusician.length - 1];
    this.listMusician.push(this.listMusician[0]);
    this.listMusician.unshift(newItem);
    this.currentIndex = 1;
  }

  public prev() {
    this.isTransitionAllowed = true;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }


  public next() {
    this.isTransitionAllowed = true;
    if (this.currentIndex < this.listMusician.length - 1) {
      this.currentIndex++;
    }
  }


  public transform() {
    return `-${this.currentIndex * 100}%`;
  }

  public swipeHold(e) {
    this.mouseHoldPosition = e.clientX;
  }

  public swipeRelease(e): void {
    if (this.mouseHoldPosition < e.clientX) {
      this.prev();
    } else if (this.mouseHoldPosition > e.clientX) {
      this.next();
    }
  }

  public refreshPosition(): void {
    if (this.currentIndex === 0) {
      this.isTransitionAllowed = false;
      this.currentIndex = this.listMusician.length - 2;
    } else if (this.currentIndex === this.listMusician.length - 1) {
      this.isTransitionAllowed = false;
      this.currentIndex = 1;
    }
  }


}
