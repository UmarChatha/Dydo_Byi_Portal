import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/development';

@Injectable({
  providedIn: 'root'
})
export class CustomerManagementService {
  private customerPhoneNumber!:string;
  private bmsUrl=environment.bmsDydo;
  private accId=environment.accId;
  private appCode=environment.appCode;
  constructor( private http: HttpClient  ) { }

  //Customer Pre-Search
  customerPreSearchNumberSet(phoneNumber:string):void{
    this.customerPhoneNumber=phoneNumber;
  }
  customerPreSearchNumberGet(){
    return this.customerPhoneNumber
  }

  //Create Customer
  getProvince(){
    return this.http.get(`${this.bmsUrl}/v1/adresIndex/sorguIl?accId=${this.accId}&appCode=${this.appCode}&ID=0`)
  }
  getDistrict(provinceId:any){
    return this.http.get(`${this.bmsUrl}/v1/adresIndex/SorguIlce?accId=${this.accId}&appCode=${this.appCode}&ID=${provinceId}`)
  }
  getNeighborhood(districtId:any){
    return this.http.get(`${this.bmsUrl}/v1/adresIndex/sorguMAH2?accId=${this.accId}&appCode=${this.appCode}&ID=${districtId}`)
  }
}