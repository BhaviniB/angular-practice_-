import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl= environment.server_url+ '/products/'

  constructor(private apiService: ApiService) { }
  
  getAllProducts() : Observable<Product[]>{
    return this.apiService.get(this.productUrl)
  }
  getProductById(id: string): Observable<Product>{
    return this.apiService.get(this.productUrl + id);
  }

  updateProduct(product): Observable<Product>{
    return this.apiService.put(this.productUrl + '/' + product.id, product);
  }
  deleteProduct(id: string): Observable<Product>{
    debugger;
    return this.apiService.delete(this.productUrl + '/' + id);
  }
  addProduct(ob: Product): Observable<Product>{
    return this.apiService.post(this.productUrl, ob);
  }
}
