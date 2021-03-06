// AppModule class: voeg modules en componenten toe
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WerelddeelComponent } from './werelddeel/werelddeel.component';
import { FormsModule } from '@angular/forms';
import { WerelddeelDetailComponent } from './werelddeel-detail/werelddeel-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { HttpClientModule } from "@angular/common/http";
import { ImageComponent } from './image/image.component';

// Elk component moet hier declared worden
@NgModule({
  declarations: [
    AppComponent,
    WerelddeelComponent,
    WerelddeelDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ImageComponent,
  ],
  // import Modules van de Angular bibliotheek
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
