import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AdminComponent } from './modules/admin/admin.component'
import { BattleComponent } from './modules/battle/battle.component'
import { SearchComponent } from './modules/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BattleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }