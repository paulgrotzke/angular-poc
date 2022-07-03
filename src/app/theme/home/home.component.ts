import { Component } from '@angular/core'
import { SearchService } from 'app/modules/search/search.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private searchService: SearchService) {}
  
  hits = this.searchService.hits
}
