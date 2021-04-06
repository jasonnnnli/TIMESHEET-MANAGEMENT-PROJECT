import { Component } from '@angular/core';
import { MockDataService } from './services/mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MockDataService],
})
export class AppComponent {
  title = 'Timecard';
}
