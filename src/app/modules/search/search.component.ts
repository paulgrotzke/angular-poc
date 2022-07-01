import { Component, EventEmitter, Output } from '@angular/core'
import { SearchService } from './search.service'

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output()
  onChange: EventEmitter<string> = new EventEmitter<string>()

  constructor(private searchService: SearchService) {}

  model: { query: string } = { query: '' }

  searchInputChanged(event: Event) {
    event.preventDefault()
    // this.onChange.emit(this.searchService.search(this.model.query))
    this.searchService.search(this.model.query)
  }
}
