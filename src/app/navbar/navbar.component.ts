import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type NavbarItem = {
  text: string;
  url: string;
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: NavbarItem[]= [
    { text: 'Explore', url: '/'},
    { text: 'Random image', url: '/random'},
  ]
}
