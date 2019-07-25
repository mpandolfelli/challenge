import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { StoreComponent } from './store/store.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FilterPipe } from './filter.pipe';
import { DifferencePipe } from './difference.pipe';
import { ProfileComponent } from './profile/profile.component';
import { SortPipe } from './sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    FilterPipe,
    DifferencePipe,
    ProfileComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatButtonModule,  
    MatSnackBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatPaginatorModule,
    RouterModule,
    MatListModule,
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
