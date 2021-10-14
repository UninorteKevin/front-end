import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public Products: Product[];

  public messageResponse: String;
  public faStar = faStar;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      response => {
        if(response.status == 'SUCCESS'){
          this.Products = response.products;
          this.messageResponse = 'SUCCES';
        } else
          this.messageResponse = response.message;
      },  
      err => {
        console.log(err as any);
      }
    )
  }
}
