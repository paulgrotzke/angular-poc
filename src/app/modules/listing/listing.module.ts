import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ListingComponent } from './listing.component'

@NgModule({
  imports: [CommonModule],
  exports: [ListingComponent],
  declarations: [ListingComponent],
})
export class ListingModule {}
