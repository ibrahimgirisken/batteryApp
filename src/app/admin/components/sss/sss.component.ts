import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sss',
  templateUrl: './sss.component.html',
  styleUrls: ['./sss.component.scss']
})
export class SssComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function() {
      $('#table').DataTable();
    });
  }
}
