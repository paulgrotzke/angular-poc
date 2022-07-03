import { Component } from '@angular/core'
import { SearchService } from './search.service'

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  constructor(private searchService: SearchService) {}

  model: { query: string } = { query: '' }

  searchInputChanged(event: Event) {
    event.preventDefault()
    this.searchService.search(this.model.query)
  }
}
