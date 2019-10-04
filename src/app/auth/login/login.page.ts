import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  login(form) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
      },
      error => {
        console.error();

      },
      () => {
        this.dismissModal();
        this.navCtrl.navigateRoot('/recipes');
      }
    );
  }

  async registerModal () {
    this.dismissModal();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }
  
  dismissModal(){
    this.modalController.dismiss();
  }

}
