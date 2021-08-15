import { ProductService } from './../../../core/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from './../../../core/models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  addForm;
  constructor(private route: ActivatedRoute,private  formBuilder: FormBuilder, private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    debugger
    // this.route.data.subscribe((data) => {
      // this.product = data.product;
      this.addForm = this.formBuilder.group({
        name: this.formBuilder.control('', [Validators.required]),
        desc: this.formBuilder.control('', [Validators.required]),
        quantity: this.formBuilder.control('', [Validators.required]),
        mrp: this.formBuilder.control('', [Validators.required])
      });
    // });


  }
  submitAddForm(value){
    let product: Product ={
      id: value.id,
      mrp: value.mrp,
      quantity: value.quantity,
      category: value.category,
      image: value.image,
      productName: value.name,
      productDesc: value.desc,
      tags: value.tags
    }
    this.productService.addProduct(product).subscribe(data => {
    });
      this.router.navigateByUrl('/');
      this.addForm.reset();
    }
  

}
