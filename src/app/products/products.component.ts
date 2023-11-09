import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  buyProduct(product: any) {
    // Ajoutez votre logique d'achat ici
    console.log('Acheter le produit :', product.name);
    alert('Le produit ' + product.name + ' est acheté');
  }
}
