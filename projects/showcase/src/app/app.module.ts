import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollectionEditorModule } from 'collection-editor';
// import { AwesomeTimeModule } from 'collection-editor/awesome-time';
import { DialCodeModule } from 'collection-editor/dialcode';
// import { SunbirdEpubPlayerModule } from '@project-sunbird/sunbird-epub-player-v9';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { PrintComponent } from './components/print.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CollectionEditorModule,
    DialCodeModule,
    // SunbirdEpubPlayerModule
    // AwesomeTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
