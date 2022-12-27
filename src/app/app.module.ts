import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataService } from "../data.service";
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MenuNavigationComponent} from "../menu/menu-component";
import {RouterModule, Routes} from "@angular/router";
import {MatchComponent} from "../match-component/match-component";
import {WeaponsComponent} from "../weapons-component/weapons-component";
import {OverviewComponent} from "../overview-component/overview-component";

const routes: Routes = [
  { path: 'match-component', component: MatchComponent },
  { path: 'weapons-component', component: WeaponsComponent },
  { path: 'overview-component', component: OverviewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuNavigationComponent,
    MatchComponent,
    WeaponsComponent,
    OverviewComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes)

    ],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
