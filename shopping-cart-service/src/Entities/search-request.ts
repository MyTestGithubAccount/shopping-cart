import {SortColumn, SortDirection} from "./search-result"

export interface SearchRequest {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: SortColumn;
    sortDirection: SortDirection;
  }