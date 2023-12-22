import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isSubmenu1:boolean=false;
  isSubmenu2:boolean=false;
  isSubmenu3:boolean=false;
  isSubmenu4:boolean=false;
  isSubmenu5:boolean=false;
  isSubmenu6:boolean=false;
  isSubmenu7:boolean=false;
  
  isSubmenuFn1(){
    this.isSubmenu1=!this.isSubmenu1;
    this.isSubmenu2=false;
    this.isSubmenu3=false;
    this.isSubmenu4=false;
    this.isSubmenu5=false;
    this.isSubmenu6=false;
    this.isSubmenu7=false;
  }
  isSubmenuFn2(){
    this.isSubmenu2=!this.isSubmenu2;
    this.isSubmenu1=false;
    this.isSubmenu3=false;
    this.isSubmenu4=false;
    this.isSubmenu5=false;
    this.isSubmenu6=false;
    this.isSubmenu7=false;
  }
  isSubmenuFn3(){
    this.isSubmenu3=!this.isSubmenu3;
    this.isSubmenu1=false;
    this.isSubmenu2=false;
    this.isSubmenu4=false;
    this.isSubmenu5=false;
    this.isSubmenu6=false;
    this.isSubmenu7=false;
  }
  isSubmenuFn4(){
    this.isSubmenu4=!this.isSubmenu4;
    this.isSubmenu1=false;
    this.isSubmenu2=false;
    this.isSubmenu3=false;
    this.isSubmenu5=false;
    this.isSubmenu6=false;
    this.isSubmenu7=false;
  }
  isSubmenuFn5(){
    this.isSubmenu5=!this.isSubmenu5;
    this.isSubmenu1=false;
    this.isSubmenu2=false;
    this.isSubmenu3=false;
    this.isSubmenu4=false;
    this.isSubmenu6=false;
    this.isSubmenu7=false;
  }
  isSubmenuFn6(){
    this.isSubmenu6=!this.isSubmenu6;
    this.isSubmenu1=false;
    this.isSubmenu2=false;
    this.isSubmenu3=false;
    this.isSubmenu4=false;
    this.isSubmenu5=false;
    this.isSubmenu7=false;
  }
  isSubmenuFn7(){
    this.isSubmenu7=!this.isSubmenu7;
    this.isSubmenu1=false;
    this.isSubmenu2=false;
    this.isSubmenu3=false;
    this.isSubmenu4=false;
    this.isSubmenu5=false;
    this.isSubmenu6=false;
  }
  
}
