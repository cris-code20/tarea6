import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-sex-name',
  templateUrl: './sex-name.page.html',
  styleUrls: ['./sex-name.page.scss'],
})
export class SexNamePage {

  name: string = '';
  gender: string = '';
  color: string = '';

  constructor(private service: ApiService) {}

  predictGender() {
    this.service.getGenderByName(this.name).subscribe(response => {
      this.gender = response.gender;
      this.color = this.gender === 'male' ? 'blue' : 'pink';
    });
  }

}
