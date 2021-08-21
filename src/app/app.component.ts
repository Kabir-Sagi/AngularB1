import { Component, ViewEncapsulation } from '@angular/core';
class MyProvider {
   name:string='A2N'
   description:string = 'jkebfjabvdsjbvdjksvbjksbvkjsbvkjbksdbsjkdb'

     printProperties():void {
        console.log(this.name,this.description)  //500
     }
}

 class MyClass {
    email:string = "A2N@gmail.com"   //300
 }





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders :[MyProvider,MyClass],
  
 
})



export class AppComponent {
 title:string = "App Component"
 gender:boolean = true
//  num1:number=20
//  num2:number = 40
//   std:any = {
//      name:'sagar',
//      city:'Delhi'
//   }
//   constructor(public myprovider:MyProvider,public myclass:MyClass) {
//         myprovider.printProperties()
//         console.log(myclass.email)   //1000
//   }
        
       change(gender:boolean):void {
         this.gender = gender
       }
  
}
