import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Data-Binding';
  userName:string="";
  password:string="";
  retypePassword:string="";
  isPasswordMatch:boolean=false;
  isLessChar:boolean=false;
  email:string="";
  checkEmail:boolean=false;
  onUsernameInputChanged(e:Event){
    this.userName=(<HTMLInputElement>e.target).value;
  }
  OnPasswordInputChanged(e:Event){
    this.password=(e.target as HTMLInputElement).value;
    //this.isLessChar=(this.password.length>=6)?true:false;
    if(this.password.length>=6){
      this.isLessChar=true;
    }
    else{
      this.isLessChar=false;
    }
  }

  onRetypePasswordChanged(e:Event){
    this.retypePassword=(e.target as HTMLInputElement).value;
    //this.isPasswordMatch=(this.password===this.retypePassword)?true:false;
    if(this.password===this.retypePassword){
      this.isPasswordMatch=true;
    }
    else{
      this.isPasswordMatch=false;
    }
  }
  onEmailInputChanged(e:Event){
    this.email=(e.target as HTMLInputElement).value;
    if(this.email.includes('@')){
      this.checkEmail=true;
    }
    else{
      this.checkEmail=false;
    }
    //this.checkEmail=(this.email.includes('@'))?true:false;
    

  }
}
