import { NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ModuleLoadedOnceGuard } from './module-loaded-once.guard'
import { NavbarComponent } from './navbar/navbar.component'
import { AuthService } from './services/auth.service'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [NavbarComponent, HttpClientModule, RouterModule],
  providers: [AuthService],
})

// ensures that CoreModule is only loaded into AppModule due to performance reasons
export class CoreModule extends ModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}
