import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent {
  @Input() plantId?:number;
  @Output() heartClick = new EventEmitter<number>();

  addFavorite(){
    if (this.plantId !== undefined) {
      this.heartClick.emit(this.plantId);
    }
  }
}