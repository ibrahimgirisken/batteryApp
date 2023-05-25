import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function() {
      $('#table').DataTable();
    });
  }

}
