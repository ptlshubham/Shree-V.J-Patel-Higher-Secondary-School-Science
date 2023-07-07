import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { HomeRoutes } from './home.routing';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { LeftImageTextComponent } from './left-image-text/left-image-text.component';
import { RightImageTextComponent } from './right-image-text/right-image-text.component';
import { SectionCoursesComponent } from './section-courses/section-courses.component';
import { SectionMessageComponent } from './section-message/section-message.component';
import { StatisticsIncrementorComponent } from './statistics-incrementor/statistics-incrementor.component';
import { QuickConnectComponent } from './quick-connect/quick-connect.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeSliderComponent,
    LeftImageTextComponent,
    RightImageTextComponent,
    SectionCoursesComponent,
    SectionMessageComponent,
    StatisticsIncrementorComponent,
    QuickConnectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(HomeRoutes),
    NgbModule,
    CarouselModule
  ],
  exports:[
    MainComponent,
    HomeSliderComponent,
    LeftImageTextComponent,
    RightImageTextComponent,
    SectionCoursesComponent,
    SectionMessageComponent,
    StatisticsIncrementorComponent
  ]
})
export class HomeModule { }
