import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Output() sortByAlpha = new EventEmitter();
  @Output() sortByWater = new EventEmitter();
  @Output() sortBySun = new EventEmitter();

  onSortByAlpha(){
   this.sortByAlpha.emit()
  }

  onSortByWater(){
    this.sortByWater.emit()
  }
  onSortBySun(){
    this.sortBySun.emit()
  }



}
