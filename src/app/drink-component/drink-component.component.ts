import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drink-component',
  imports: [CommonModule],
  standalone: true, // If using Angular standalone components
  templateUrl: './drink-component.component.html',
  styleUrl: './drink-component.component.css'
})
export class DrinkComponentComponent {
  drinks =[
    { name: 'Coke', price: 1.5 },
    { name: 'Pepsi', price: 1.5 },
    { name: 'Sprite', price: 1.5 },
    { name: 'Fanta', price: 1.5 },
    { name: 'Water', price: 1.0 },
    { name: 'Coke', price: 1.5 },
    { name: 'Pepsi', price: 1.5 },
    { name: 'Sprite', price: 1.5 },
    { name: 'Fanta', price: 1.5 },
    { name: 'Water', price: 1.0 },



  ];
  onAddDrink() {
    // Logic to add a new drink (could show a form or prompt)
    console.log('Add button clicked');
  }

  onEditDrink(drink: any, index: number) {
    // Logic to update the drink (e.g., open a modal)
    console.log('Edit drink:', drink, 'at index:', index);
  }

  onDeleteDrink(index: number) {
    this.drinks.splice(index, 1);
  }

}
