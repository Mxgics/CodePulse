import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule],
  providers: [HttpClientModule],
})
export class AppComponent {
  colorFrequency: any[] = [];
  agesPlus20: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUserData()
      .subscribe((data: { colorFrequency: any[]; agesPlus20: any[] }) => {
        this.colorFrequency = data.colorFrequency;
        this.agesPlus20 = data.agesPlus20;
      });
  }
}
