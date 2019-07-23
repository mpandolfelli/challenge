import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { StoreComponent } from './store/store.component';
import { ItemComponent } from './item/item.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FilterPipe } from './filter.pipe';
import { DifferencePipe } from './difference.pipe';
@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ItemComponent,
    FilterPipe,
    DifferencePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,  
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    MatChipsModule,
    MatMenuModule,
    MatSliderModule,
    FlexLayoutModule,
    MatCardModule,
    ContentLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
