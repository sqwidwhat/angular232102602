import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-dashboard3',
  standalone: true,
  imports: [Header, Sidebar, Footer, RouterModule],
  templateUrl: './dashboard3.html',
  styleUrl: './dashboard3.css',
})
export class Dashboard3 implements AfterViewInit {
  constructor(private httpClient: HttpClient, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');
    this.renderer.addClass(document.body, 'sidebar-collapse');
  }
}
