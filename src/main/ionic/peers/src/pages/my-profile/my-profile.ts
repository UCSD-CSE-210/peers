import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user-service";
import {AppState} from "../../states/app-state";
import { AlertController, ModalController } from "ionic-angular";
import {ModalWithInputs} from "../edit-profile/modal-with-inputs";

@Component({
  selector: 'page-myprofile',
  templateUrl: 'my-profile.html'
})

export class MyProfile implements OnInit, OnDestroy {
  user : User;
  constructor(private userService : UserService,
              private appState: AppState,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController) {
  }

  ngOnDestroy() : void {
  }

  ngOnInit() : void {
    this.appState.setIsLoading(true);
    this.userService.getUser("2").then(response => {
      this.appState.setIsLoading(false);
      response.data.photoUrl = "https://i.pinimg.com/736x/45/18/61/4518617f909007087ef9cebbfcaec007--rock-painting-bonsai.jpg";
      this.user = response.data;
    })
  }

  editProfile() {
    console.log("editProfile");
    let profileModal = this.modalCtrl.create(ModalWithInputs, this.user);
    profileModal.present();
  }
}
