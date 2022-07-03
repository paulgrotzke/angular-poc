import { apiKey, endpoint, indexName } from './const'
import { SearchClient, AzureKeyCredential } from '@azure/search-documents'
import * as t from './types'
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable()
export class SearchService {
  constructor() {}

  client = new SearchClient<t.Hotel>(endpoint, indexName, new AzureKeyCredential(apiKey))
  hits: t.Hotel[] = []

  getHits() {
    return this.hits
  }

  async search(query: string) {
    this.hits.length = 0
    const { results } = await this.client.search(query)
    for await (const result of results) {
      this.hits.push(result.document)
    }
  }
}
