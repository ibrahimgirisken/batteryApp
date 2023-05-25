import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langs',
  templateUrl: './langs.component.html',
  styleUrls: ['./langs.component.scss'],
})

export class LangsComponent implements OnInit {
  jsonDataTr: { [key: string]: string } = {};

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<{ [key: string]: string }>('assets/i18n/tr.json').subscribe((data) => {
      this.jsonDataTr = data;
    });
    $(document).ready(function () {
      $('#table').DataTable();
    });
  }
  updateValue(key: string, newValue: string): void {
    (this.jsonDataTr as { [key: string]: string })[key] = newValue;
  }
}
