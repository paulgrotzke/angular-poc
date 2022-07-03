import { Component } from '@angular/core'
import { SearchService } from 'app/modules/search/search.service'

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
})
export class CrudComponent {
  constructor(private searchService: SearchService) {}

  hits = this.searchService.hits
}