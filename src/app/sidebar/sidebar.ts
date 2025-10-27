import { Component, Input } from '@angular/core';
import { AppRoutes } from '../app.routes';

@Component({
  selector: 'app-sidebar',
  imports: [AppRoutes],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() modulName: string = '';
}
