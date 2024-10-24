import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-age-name',
  templateUrl: './age-name.page.html',
  styleUrls: ['./age-name.page.scss'],
})
export class AgeNamePage {

  name: string = '';
  age: number = 0;
  ageGroup: string = '';
  imageUrl: string = '';

  constructor(private app: ApiService) {}

  predictAge() {
    this.app.getAgeByName(this.name).subscribe(response => {
      this.age = response.age;
      this.determineAgeGroup();
    });
  }
//202010703
  determineAgeGroup() {
    if (this.age < 18) {
      this.ageGroup = 'Joven';
      this.imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqnZMtVGg75o5I1b4ivmyYLUx51xIPkI4xrwrB_VR6JsBikO3mrkQHHnSe3I7xJEJqVQ&usqp=CAU';
    } else if (this.age >= 18 && this.age <= 60) {
      this.ageGroup = 'Adulto';
      this.imageUrl = 'https://i.pinimg.com/736x/89/92/17/89921778c697067f8bd5a9a011b46bdb.jpg';
    } else {
      this.ageGroup = 'Anciano';
      this.imageUrl = 'https://i.pinimg.com/474x/24/82/03/24820313fbb45239f4e506b47313c973.jpg';
    }
  }



}
