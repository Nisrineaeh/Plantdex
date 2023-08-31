import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-tab-admin',
  templateUrl: './tab-admin.component.html',
  styleUrls: ['./tab-admin.component.css']
})
export class TabAdminComponent {
  @Input() adminPlant!: Plant;
}