import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { LoginModule } from './modules/login/login.module'
import { SearchModule } from './modules/search/search.module'

@NgModule({
  imports: [BrowserModule, CoreModule, AppRoutingModule, LoginModule, SearchModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
