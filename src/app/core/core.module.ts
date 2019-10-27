import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./navigation/header/header.component";
import { HomeComponent } from "./home/home.component";
import { TimelineModule } from "./components/timeline/timeline.module";

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [FormsModule, ReactiveFormsModule, TimelineModule, RouterModule],
  exports: [HeaderComponent],
  providers: []
})
export class CoreModule {}
