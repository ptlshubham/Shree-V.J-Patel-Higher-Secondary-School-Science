import { Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { EvalutionComponent } from './evalution/evalution.component';
import { SearchComponent } from './search/search.component';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { PaperComponent } from './paper/paper.component';
import { ResultComponent } from './result/result.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
export const MoreRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'campus',
        component: CampusComponent
    },
    {
        path: 'search/:id',
        component: SearchComponent
    },
    {
        path: 'evalution',
        component: EvalutionComponent
    },
    {
        path: 'paper',
        component: PaperComponent
    },
    {
        path: 'result',
        component: ResultComponent
    },
    {
        path:'academic-calendar',
        component:AcademicCalendarComponent
    },
    {
        path:'scholarships',
        component:ScholarshipsComponent
    },
    {
        path:'magazine',
        component:MagazineComponent
    },
    {
        path:'news',
        component:NewsComponent
    },
    {
        path: 'links/:id',
        component: SyllabusComponent
    },
    ]
}];
