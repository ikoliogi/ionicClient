import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from '../../../interfaces/IProduct';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {ICategory} from '../../../interfaces/ICategory';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss'],
})
export class CategoryProductsComponent implements OnInit {

  public products: IProduct[] = null;
  public category: ICategory = null;

  constructor(
      private http: HttpClient,
      private route: ActivatedRoute,
      private api: ApiService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.api.getCategory(params.categoryId)
      .subscribe(response => {
          this.products = response.products;
          this.category = response.category;
      });
    });

    // epeidh exoume dhlwsei null to category, h angular kanontas render prin oloklhrw8ei to request spaei.
    // gia to logo auto sto .html vazoume {{ category?.title }}, etsi wste na to tupwsei mono an uparxei

  }

}
