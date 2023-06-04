import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from '../components/pages/page-one/page-one.component';
import { PageTwoComponent } from '../components/pages/page-two/page-two.component';
import { PageThreeComponent } from '../components/pages/page-three/page-three.component';
import { PageFourComponent } from '../components/pages/page-four/page-four.component';
import { PageFiveComponent } from '../components/pages/page-five/page-five.component';

const routes: Routes = [
  { path: '', redirectTo: '/one', pathMatch: 'full' },
  { path: 'one', component: PageOneComponent },
  { path: 'two', component: PageTwoComponent },
  { path: 'three', component: PageThreeComponent },
  { path: 'four', component: PageFourComponent },
  { path: 'five', component: PageFiveComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
