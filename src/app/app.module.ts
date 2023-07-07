import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicModule } from './basic/basic.module';
import { DepartmentModule } from './department/department.module';
import { MoreModule } from './more/more.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './home/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    BasicModule,
    DepartmentModule,
    MoreModule,
    HomeModule,
    SharedModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
