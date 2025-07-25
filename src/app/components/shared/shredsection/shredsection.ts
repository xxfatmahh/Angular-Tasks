import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shredsection',
  imports: [],
  templateUrl: './shredsection.html',
  styleUrl: './shredsection.css'
})
export class Shredsection {

  @Input() title: string = '';
}
