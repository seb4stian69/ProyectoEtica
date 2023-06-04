import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { PageTwoComponent } from './components/pages/page-two/page-two.component';
import { PageThreeComponent } from './components/pages/page-three/page-three.component';
import { PageFourComponent } from './components/pages/page-four/page-four.component';
import { PageFiveComponent } from './components/pages/page-five/page-five.component';
import { PageOneComponent } from './components/pages/page-one/page-one.component';
import { NavComponent } from './components/navbar/nav.component';
import { TabMenuModule } from 'primeng/tabmenu';


@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
