import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bindings',
  imports: [CommonModule, FormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  username = 'Guest';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  imageAlt = 'Angular Logo';
  imageWidth = 100;
  isButtonDisabled = false;
  counter = 0;
  backgroundColor = '#f0f0f0';
  selectedColor = '';
  colors = ['red', 'blue', 'green', 'purple', 'orange'];

  getCurrentTime() {
    return new Date().toLocaleTimeString();
  }

  incrementCounter() {
    this.counter++;
    this.isButtonDisabled = this.counter >= 10;
  }

  handleMouseOver() {
    this.backgroundColor = '#e0e0e0';
  }

  handleMouseOut() {
    this.backgroundColor = '#f0f0f0';
  }
}
