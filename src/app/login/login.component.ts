import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData: object = {};
  defaultLanguage!:string;
  supportedLanguages: string[] = ['Turkish', 'English'];
  languageMapping: { [key: string]: string } = {
    'Turkish': 'tr',
    'English': 'en'
  };

  constructor(private fb: FormBuilder, private translate: TranslateService, private loginService:LoginService) { }
  ngOnInit(){
    this.defaultLanguage=window.navigator.language;
    this.loginService.setLanguage(this.defaultLanguage);
  }

  selectLang(event: any){
    this.defaultLanguage = event?.value;
    this.loginService.setLanguage(this.defaultLanguage);
    const language=this.loginService.getLanguage();
    this.translate.use(language as string);
  }

  loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  LoginFn(): void {
    if (this.loginForm.valid) {
      this.loginData = {
        email: this.loginForm.value.email as string,
        password: this.loginForm.value.password as string,
      }
      this.loginForm.reset();
      console.log(this.loginData)
      this.loginService.login(this.loginData).subscribe(
        {
          next:(result:any)=>{
            console.log(result)
          },
          error:(error:any)=>{
            console.log(error)
            alert(error.statusText)
          },
          complete:()=>{
  
          }
        }
      )
      
    }
  }

}
