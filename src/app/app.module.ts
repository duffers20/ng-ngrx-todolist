import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { mainReducer } from './state-management/reducers/main-reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InputBarComponent } from './input-bar/input-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InputBarComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore(mainReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
