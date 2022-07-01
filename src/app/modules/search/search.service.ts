import { apiKey, endpoint, indexName } from './const'
import { SearchClient, AzureKeyCredential } from '@azure/search-documents'
import * as t from './types'

export class SearchService {
  constructor() {}
  hits: t.Hotel[] = []
  client = new SearchClient<t.Hotel>(endpoint, indexName, new AzureKeyCredential(apiKey))

  async search(query: string) {
    const { results } = await this.client.search(query, {})

    for await (const result of results) {
      result.score > 2 && this.hits.push(result.document)
    }
  }
}
