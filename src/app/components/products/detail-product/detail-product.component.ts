import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  public Product: Product;

  public messageResponse: String
  public statusResponse: String;
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(
      params =>{
        const codigo = params['id'];
        this.productService.getProduct(codigo).subscribe(
          response => {
            if(response.status == 'SUCCESS'){
              this.Product = response.product;
              this.statusResponse = response.status;
            } else 
              this.messageResponse = response.message;
              this.statusResponse = response.status;
          },
          err => {
            this.messageResponse = 'Error al traer la informacion del producto referenciado.'
            console.log(err as any);
          }
        )
      },
      err => {
        console.log(err as any);
      }
    )
  }
}
