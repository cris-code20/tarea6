import { Component,  } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.page.html',
  styleUrls: ['./university.page.scss'],
})
export class UniversityPage  {

  country: string = '';
  universities: any[] = [];

  constructor(private Uni: ApiService) {}

  searchUniversities() {
    this.Uni.getUniversitiesByCountry(this.country).subscribe(response => {
      this.universities = response;
    });
  }

}
