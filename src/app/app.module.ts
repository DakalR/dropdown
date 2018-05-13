import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownDirective } from '@Directives/dropdown.directive';
import { DropdownTriggerDirective } from '@Directives/dropdown-trigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    DropdownTriggerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
