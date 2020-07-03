import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Musician } from 'src/app/core/models/musician';
import { Musicians } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-home-musicians',
  templateUrl: './home-musicians.component.html',
  styleUrls: ['./home-musicians.component.scss']
})
export class HomeMusiciansComponent implements OnInit, AfterViewChecked {
  listMusician: Musician[];
  currentIndex: number = 0;
  mouseHoldPosition: number;
  isTransitionAllowed: boolean;
  isDragging: boolean;
  transformValue: string;
  // first drag position
  posX1: number;
  // next drag position
  posX2: number;

  @ViewChildren('sliderImage') sliderImage: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
    this.listMusician = [...Musicians];

    const newItem = this.listMusician[this.listMusician.length - 1];

    // clone first and last item
    this.listMusician.push(this.listMusician[0]);
    this.listMusician.unshift(newItem);
    this.currentIndex = 1;
  }

  ngAfterViewChecked() {
    this.transform();
  }

  public prev(): void {
    this.isTransitionAllowed = true;
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.transform();
    }
  }

  public next(): void {
    this.isTransitionAllowed = true;
    if (this.currentIndex < this.listMusician.length - 1) {
      this.currentIndex++;
      this.transform();
    }
  }

  private transform(value?: string) {
    this.sliderImage.toArray().forEach((imageElement, i) => {
      imageElement.nativeElement.style.left = `-${this.currentIndex * 992}px`;
    });

  }

  public refreshPosition(index: number): void {
    if (index !== 0) {
      return;
    }
    if (this.currentIndex === 0) {
      this.isTransitionAllowed = false;
      // TODO check length
      this.currentIndex = this.listMusician.length - 2;
    } else if (this.currentIndex === this.listMusician.length - 1) {
      this.isTransitionAllowed = false;
      this.currentIndex = 1;
    } else {
      return;
    }
    this.transform();
  }

  public swipeHold(e): void {
    this.isDragging = true;
    console.log(e, typeof e);
    // e = e || window.event;
    // e.preventDefault();
    // posInitial = items.offsetLeft;

    // if (e.type === 'touchstart') {
    //   posX1 = e.touches[0].clientX;
    // } else {
    //   posX1 = e.clientX;
    // }
  }

  public swipeAction(e): void {
    this.posX2 = this.posX1 ? this.posX1 - e.clientX : e.clientX;
    this.posX1 = e.clientX;
    this.sliderImage.toArray().forEach(imageElement => {
      const leftPosition = imageElement.nativeElement.style.left.replace('px', '');
      imageElement.nativeElement.style.left = `${Number(leftPosition) - this.posX2}px`;
    });
    if (this.isDragging) {
      console.log(e, typeof e);
    }
    // posX2 = posX1 - e.clientX;
    // posX1 = e.clientX;
    // items.style.left = (items.offsetLeft - posX2) + "px";
  }

  public swipeRelease(e): void {
    this.isDragging = false;
    console.log(e, typeof e);

    // posFinal = items.offsetLeft;
    // if (posFinal - posInitial < -threshold) {
    //   shiftSlide(1, 'drag');
    // } else if (posFinal - posInitial > threshold) {
    //   shiftSlide(-1, 'drag');
    // } else {
    //   items.style.left = (posInitial) + "px";
    // }

  }


}
