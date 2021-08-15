import { ProductService } from './../../../core/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from './../../../core/models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  editForm;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      debugger;
      this.product = data.product;
      this.editForm = this.formBuilder.group({
        name: this.formBuilder.control(this.product.productName, [
          Validators.required,
        ]),
        desc: this.formBuilder.control(this.product.productDesc, [
          Validators.required,
        ]),
        quantity: this.formBuilder.control(this.product.quantity, [
          Validators.required,
        ]),
        mrp: this.formBuilder.control(this.product.mrp, [Validators.required]),
      });
    });
  }
  submitEditForm(value) {
    debugger;
    let product: Product = {
      id: this.product.id,
      mrp: value.mrp,
      quantity: value.quantity,
      category: this.product.category,
      image: this.product.image,
      productName: value.name,
      productDesc: value.desc,
      tags: this.product.tags,
    };
    this.productService.updateProduct(product).subscribe((data) => {});
    this.router.navigateByUrl('/');
    this.editForm.reset();
  }
}
