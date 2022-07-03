import { Component, OnChanges } from '@angular/core'
import { SearchService } from '../search/search.service'

@Component({
  selector: 'listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent {
  constructor(private searchService: SearchService) {}

  hits = this.searchService.hits

}
