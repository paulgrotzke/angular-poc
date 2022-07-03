import { Component, Input, OnChanges } from '@angular/core'
import { Hotel } from 'app/shared/types'
import { SearchService } from '../search/search.service'

@Component({
  selector: 'listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent {
  @Input() hits: Hotel[] = []
  constructor() {}
}
