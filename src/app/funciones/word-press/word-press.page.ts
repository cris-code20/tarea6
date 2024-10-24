import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-word-press',
  templateUrl: './word-press.page.html',
  styleUrls: ['./word-press.page.scss'],
})
export class WordPressPage implements OnInit{
  news: any[] = [];
  siteLogo = 'https://poststatus.com/wp-content/uploads/2023/07/Post-Status.svg';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.http.get('https://poststatus.com/wp-json/wp/v2/posts?per_page=3').subscribe((data: any) => {
      this.news = data;
    });
  }

}
