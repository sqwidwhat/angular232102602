import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { HttpClient } from '@angular/common/http';

declare const $: any;

@Component({
  selector: 'app-mahasiswa',
  standalone: true,
  imports: [RouterModule, Footer, Sidebar, Header],
  templateUrl: './mahasiswa.html',
  styleUrl: './mahasiswa.css',
})
export class Mahasiswa implements AfterViewInit {
  data: any;
  table1: any;

  constructor(private httpClient: HttpClient, private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.table1 = $('#table1').DataTable({
      responsive: true,
      autoWidth: false,
    });
    this.bindMahasiswa();
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');
    this.renderer.addClass(document.body, 'sidebar-collapse');
  }
  bindMahasiswa(): void {
    this.httpClient
      .get('https://stmikpontianak.cloud/011100862/tampilMahasiswa.php')
      .subscribe((data: any) => {
        console.table(data);
        this.table1.clear();

        data.forEach((element: any) => {
          var tempatTanggalLahir = element.TempatLahir + ', ' + element.TanggalLahir;

          const jenisKelaminFormatted =
            element.JenisKelamin +
            ' ' +
            (element.JenisKelamin == 'Perempuan' || element.JenisKelamin == 'perempuan'
              ? "<i class='fas fa-venus text-danger'></i>"
              : element.JenisKelamin != 'undefined'
              ? "<i class='fas fa-mars text-primary'></i>"
              : '');

          var row = [
            element.NIM,
            element.Nama,
            jenisKelaminFormatted,
            tempatTanggalLahir,
            element.JP,
            element.Alamat,
            element.StatusNikah,
            element.TahunMasuk,
          ];

          this.table1.row.add(row);
        });

        this.table1.draw(false);
      });
  }
}
