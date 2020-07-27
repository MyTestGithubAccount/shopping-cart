import { Request, Response } from "express";

import { Product } from "../Entities/product";
import { SortColumn, SortDirection, SearchResult } from "../Entities/search-result";
import { SearchRequest } from "../Entities/search-request";

class ProductController
{
    private productsEntities: Product[] = [
        {
            id: 'uuid-1',
            name: 'table',
            price: 200,
            quantity: 3
        },
        {
            id: 'uuid-2',
            name: 'printer',
            price: 100,
            quantity: 6
        },
    
        {
            id: 'uuid-3',
            name: 'scanner',
            price: 45,
            quantity: 1
        },
    
        {
            id: 'uuid-4',
            name: 'monitor',
            price: 89,
            quantity: 10
        },
        {
            id: 'uuid-5',
            name: 'keyboard',
            price: 10,
            quantity: 3
        },
        {
            id: 'uuid-6',
            name: 'mouse',
            price: 200,
            quantity: 5
        }
    ];

    private compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

    private sort(products: Product[], column: SortColumn, direction: string): Product[] {
        if (direction === '' || column === '') {
            return products;
        } else {
            return [...products].sort((a, b) => {
            const res = this.compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
            });
        }
    }

    private matches(product: Product, term: string) {
        return product.name.toLowerCase().includes(term.toLowerCase());
    }

    private _search(searchRequest: SearchRequest): SearchResult {
        const {sortColumn, sortDirection, pageSize, page, searchTerm} = searchRequest;

        // 1. sort
        let products = this.sort(this.productsEntities, sortColumn, sortDirection);

        // 2. filter
        if(searchTerm) {
            products = products.filter(product => this.matches(product, searchTerm));
        }
        const total = products.length;

        // 3. paginate
        products = products.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return {products, total};
    }

    public getAll(req: Request, res: Response):void {
        res.status(200).json(this._search(req.body));
    }
};

export default ProductController;