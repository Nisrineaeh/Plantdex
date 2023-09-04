import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { CardComponent } from './components/card/card.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SoleilComponent } from './components/soleil/soleil.component';
import { GoutteComponent } from './components/goutte/goutte.component';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { TabAdminComponent } from './components/tab-admin/tab-admin.component';
import { PlantAdminComponent } from './components/plant-admin/plant-admin.component';
import { AddPlantComponent } from './pages/add-plant/add-plant.component';
import { EditPlantComponent } from './components/edit-plant/edit-plant.component';
import { SignupComponent } from './components/signup/signup.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { CoComponent } from './components/co/co.component';
import { HeartComponent } from './components/heart/heart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageMyPlantsComponent,
    PageAdminComponent,
    PageNotFoundComponent,
    PlantListComponent,
    CardComponent,
    FilterBarComponent,
    SearchBarComponent,
    SideBarComponent,
    SoleilComponent,
    GoutteComponent,
    PlantDetailComponent,
    TabAdminComponent,
    PlantAdminComponent,
    AddPlantComponent,
    EditPlantComponent,
    SignupComponent,
    ConnexionComponent,
    CoComponent,
    HeartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
