import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SearchComponent } from './search.component'
import { SearchService } from './search.service'

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [SearchComponent],
  declarations: [SearchComponent],
  providers: [SearchService],
})
export class SearchModule {}
