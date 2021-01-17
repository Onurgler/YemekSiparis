import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.page.html',
  styleUrls: ['./foodlist.page.scss'],
})
export class FoodlistPage implements OnInit {

  validations_form: FormGroup;
  validations_form1: FormGroup;
  validations_form2: FormGroup;
  cwrap : string='Chicken Wrap';
  ham : string='Hamburger';
  cola: string='Cola';
  cwp : number=5;
  hamp : number=3;
  cop : number=1;
  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields(){
    this.validations_form = this.formBuilder.group({
      product: new FormControl('', Validators.required),
      number: new FormControl('1', Validators.required),
      price: new FormControl('', Validators.required)
    });
    this.validations_form1 = this.formBuilder.group({
      product: new FormControl('', Validators.required),
      number: new FormControl('1', Validators.required),
      price: new FormControl('', Validators.required)
    });
    this.validations_form2 = this.formBuilder.group({
      product: new FormControl('', Validators.required),
      number: new FormControl('1', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  onSubmit(value){
    let data = {
      product: value.product,
      number: value.number,
      price: value.price*value.number,
    }
    this.firebaseService.createTask(data)
    .then(
      res => {
        this.router.navigate(["/home"]);
      }
    )
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}
