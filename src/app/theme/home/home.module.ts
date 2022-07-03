import { NgModule } from '@angular/core'
import { ListingModule } from 'app/modules/listing/listing.module'
import { SearchModule } from 'app/modules/search/search.module'
import { HomeRoutingModule } from './home-routing.module'

@NgModule({
  imports: [HomeRoutingModule, SearchModule, ListingModule],
  declarations: [HomeRoutingModule.components],
})
export class HomeModule {}
