import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  username: string;
  repos: any[];

  constructor(private http: HttpClient) { }

  search() {
    this.http.get(`https://api.github.com/users/${this.username}/repos`)
      .subscribe((repos: any[]) => this.repos = repos);
  }
}