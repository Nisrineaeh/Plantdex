import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {
  @Input() plantsCategorie!: string[];

     onChangeCategory(e: Event) {
     console.log(e);     
     const target = e.target as HTMLInputElement;
     console.log("valeur de la checkbox: ", target.value);
     console.log("est t'elle coché ?: ", target.checked);
   }
}
