import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-langs',
  templateUrl: './langs.component.html',
  styleUrls: ['./langs.component.scss'],
})
export class LangsComponent implements OnInit {
  jsonDataTr: { key: string; value: string };

  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {}
  ngOnInit() {
    this.http
      .get<{ key: string; value: string }>('assets/i18n/tr.json')
      .subscribe((data) => {
        this.jsonDataTr = data;
      });
    $(document).ready(function () {
      $('#table').DataTable();
    });
  }
  updateValue(key: string, newValue: string): void {
    this.translateService.set(key, newValue, "tr");
    alert(key + ' ' + newValue);
  }
}
