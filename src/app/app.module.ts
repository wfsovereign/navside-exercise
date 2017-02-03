import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemListComponent } from './list.component';
import { RecruitApi } from './common/api/recruit.api';
import { RecruitService } from './common/service/recruit.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecruitApi, RecruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
