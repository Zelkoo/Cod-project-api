import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {DataService} from "../data.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MatchComponent} from "../match-component/match-component";
import {WeaponsComponent} from "../weapons-component/weapons-component";
import {OverviewComponent} from "../overview-component/overview-component";
import {BarChartService} from "../bar-chart-service/bar-chart.service";
import {DonutChartService} from "../pie-chart-service/donut-chart-service";
import {SideMenuComponent} from "../side-menu/side-menu.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'match-component', component: MatchComponent},
  {path: 'weapons-component', component: WeaponsComponent},
  {path: 'overview-component', component: OverviewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    WeaponsComponent,
    OverviewComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule

  ],
  exports: [RouterModule],
  providers: [DataService, BarChartService, DonutChartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
