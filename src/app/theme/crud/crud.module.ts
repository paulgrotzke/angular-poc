import { NgModule } from '@angular/core'
import { ListingModule } from 'app/modules/listing/listing.module'
import { SearchModule } from 'app/modules/search/search.module'
import { CrudRoutingModule } from './crud-routing.module'

@NgModule({
  imports: [CrudRoutingModule, SearchModule, ListingModule],
  declarations: [CrudRoutingModule.components],
})
export class CrudModule {}
