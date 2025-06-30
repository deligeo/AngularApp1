import { Component } from '@angular/core';
import { ReservationList } from './reservationList';
import { ReservationItem } from './reservationItem';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [FormsModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule,
    MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatSlideToggleModule
  ],
  styleUrl: './app.css'
})
export class App {
  protected title = 'angularapp1';

  private list = new ReservationList("Ontario parks",[
    new ReservationItem('Algonquin Provincial Park - 9:00 AM to 12:00 PM'),
    new ReservationItem('Algonquin Provincial Park - 12:00 PM to 3:00 PM'),
    new ReservationItem('Algonquin Provincial Park - 3:00 PM to 6:00 PM'),
    new ReservationItem('Bruce Peninsula National Park - 9:00 AM to 12:00 PM'),
    new ReservationItem('Bruce Peninsula National Park - 12:00 PM to 3:00 PM'),
    new ReservationItem('Bruce Peninsula National Park - 3:00 PM to 6:00 PM'),
    new ReservationItem('Killarney Provincial Park - 9:00 AM to 12:00 PM'),
    new ReservationItem('Killarney Provincial Park - 12:00 PM to 3:00 PM'),
    new ReservationItem('Killarney Provincial Park - 3:00 PM to 6:00 PM'),
    new ReservationItem('Sandbanks Provincial Park - 9:00 AM to 12:00 PM'),
    new ReservationItem('Sandbanks Provincial Park - 12:00 PM to 3:00 PM'),
    new ReservationItem('Sandbanks Provincial Park - 3:00 PM to 6:00 PM')
  ]);


  get username(): string
  {
    return this.list.user;
  }

  get itemCount(): number
  {
    return this.list.items.filter(item => !item.complete).length;
  }

  get items(): readonly ReservationItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }
    showComplete: boolean = true;
}