import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversiteListComponent } from './components/universite-list/universite-list.component';
import { UniversiteAddComponent } from './components/universite-add/universite-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {  UpdateUniversiteComponentComponent} from './components/update-universite-component/update-universite-component.component';


@NgModule({
  declarations: [
    AppComponent,
    UniversiteListComponent,
    UniversiteAddComponent,
    UpdateUniversiteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
