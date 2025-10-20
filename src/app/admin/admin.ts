import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Content } from '../content/content';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [Content, Sidebar, Header, Footer, RouterModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}
