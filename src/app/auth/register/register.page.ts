import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { Navigation } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  register(form) {
    this.authService.register(form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(
      data => {
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
      },
      error => {
        console.log(error);
      }
    );
  }

  async loginModal() {
    this.dismissModal();
    const loginModal = await this.modalController.create({
      component: LoginPage
    });
    return await loginModal.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
