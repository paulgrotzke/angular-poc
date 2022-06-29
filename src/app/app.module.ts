import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { LoginModule } from './modules/login/login.module'

@NgModule({
  imports: [BrowserModule, CoreModule, AppRoutingModule, LoginModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
