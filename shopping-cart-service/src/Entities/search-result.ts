import {Product} from "./product";

export interface SearchResult {
    products: Product[];
    total: number;
}

export type SortColumn = keyof Product | '';
export type SortDirection = 'asc' | 'desc' | '';