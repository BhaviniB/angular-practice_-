import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router: Router, private productService: ProductService ) { 
    
  }
  products: Product[];
  searchInput;
  cat: string;
  user: User = JSON.parse(sessionStorage.getItem('user'));


  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.products = data.productList;
    });
  }
  catChange(cat) {
    this.cat=cat;
  }
  edit(id: string): void {
    if (sessionStorage.getItem('isLoggedIn') !== 'true'){
      this.router.navigate(['/auth']);
    }
    else{
        this.router.navigateByUrl('products/' + id);
    }
  }

  deleteProd(id: string): void {
    debugger;
    if (sessionStorage.getItem('isLoggedIn') !== 'true'){
      this.router.navigate(['/auth']);
    }
    else{
      this.productService.deleteProduct(id).subscribe(val => {
        this.productService.getAllProducts().subscribe(data => {
          this.products = data;
        });
      }, error => {
        console.log('Error deleting item from cart', error);
      });
    }
   
}
addProd(){
  if (sessionStorage.getItem('isLoggedIn') !== 'true'){
    this.router.navigate(['/auth']);
  }
  else{
  this.router.navigateByUrl('/add');
  }

}
}
