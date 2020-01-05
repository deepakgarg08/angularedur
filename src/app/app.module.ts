import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { BlueComponent } from './blue/blue.component';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    GreenComponent,
    BlueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
