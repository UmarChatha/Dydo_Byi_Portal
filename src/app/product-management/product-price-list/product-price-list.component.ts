import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-product-price-list',
  templateUrl: './product-price-list.component.html',
  styleUrls: ['./product-price-list.component.css']
})
export class ProductPriceListComponent {

  displayedColumns: string[] = ['productCode', 'productDescription', 'productPrice','branchProductPrice'];
  dataSource: MatTableDataSource<any>;

  constructor(private fb: FormBuilder) {

    let productList = [
      {
        productCode: 1,
        productDescription:'SAKA Su 19 LT',
        productPrice:75,
        branchProductPrice:'83',
  
      },
      {
        productCode: 2,
        productDescription:'SU Pompasi',
        productPrice:35,
        branchProductPrice:'39',
  
      },
      {
        productCode: 3,
        productDescription:'SAKA Su 5 LT',
        productPrice:22,
        branchProductPrice:'25',
  
      },
      {
        productCode: 4,
        productDescription:'SAKA Su 19 LT',
        productPrice:9,
        branchProductPrice:'11',
  
      },
      {
        productCode: 5,
        productDescription:'SAKA Su 0,5 LT',
        productPrice:5,
        branchProductPrice:'6',
  
      },
    ]
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(productList);

  }

}
