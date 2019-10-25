import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterSetingsComponent } from './core/components/master-setings/master-setings.component';
import { RecordingsComponent } from './core/components/recordings/recordings.component';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    MasterSetingsComponent,
    RecordingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
