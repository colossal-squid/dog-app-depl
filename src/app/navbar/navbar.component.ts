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
    { text: 'List all breeds', url: '#'},
    { text: 'Random image', url: '#'},
    { text: 'By breed', url: '#'},
    { text: 'By sub-breed', url: '#'},
    { text: 'Browse breed list', url: '#'},
  ]
}
