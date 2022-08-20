import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  otono: string[] = [
    "https://p4.wallpaperbetter.com/wallpaper/192/148/907/nature-landscape-river-forest-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/286/54/409/nature-tree-oranges-fruit-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/395/101/254/orange-flowers-wood-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/432/956/966/fantasy-art-fractal-flowers-depth-of-field-digital-art-wallpaper-preview.jpg"
  ]

  constructor() { }

  ngOnInit() {
  }
}
