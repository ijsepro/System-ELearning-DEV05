import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponent } from './view/add/add.component';
import { DeleteComponent } from './view/delete/delete.component';
import { HomeComponent } from './view/home/home.component';
import { BookComponent } from './view/book/book.component';
import { FactionComponent } from './view/faction/faction.component';
import { FashionComponent } from './view/fashion/fashion.component';
import { LaptopComponent } from './view/laptop/laptop.component';
import { LaptopandpcComponent } from './view/laptopandpc/laptopandpc.component';
import { MobilephonesandtabComponent } from './view/mobilephonesandtab/mobilephonesandtab.component';
import { TvComponent } from './view/tv/tv.component';
import { TechaccessoiresComponent } from './view/techaccessoires/techaccessoires.component';
import { PropertyComponent } from './view/property/property.component';
import { JobsComponent } from './view/jobs/jobs.component';
import { OtherComponent } from './view/other/other.component';
import { UpdateComponent } from './view/book/update/update.component';
import { SearchComponent } from './view/book/search/search.component';
import { FetchAllComponent } from './view/book/fetch-all/fetch-all.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    HomeComponent,
    BookComponent,
    FactionComponent,
    FashionComponent,
    LaptopComponent,
    LaptopandpcComponent,
    MobilephonesandtabComponent,
    TvComponent,
    TechaccessoiresComponent,
    PropertyComponent,
    JobsComponent,
    OtherComponent,
    UpdateComponent,
    SearchComponent,
    FetchAllComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
