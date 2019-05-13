import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { DetailsTableComponent } from './details-table/details-table.component';
import { GitthubApiService } from './gitthub-api.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsCardComponent,
    DetailsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GitthubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
