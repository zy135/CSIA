import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Item {
  name?: string;
  inventory?: number;
  picture?: string;
}

@Component({
  selector: 'app-report',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  searchValue = '';
  inventoryValue = 0;

  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  inventoryChange = this.fb.group({
    inventoryValue: 0,
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filteredItems = this.Items;
  }

  Items: Item[] = [
    {
      name: 'product1',
      inventory: 10,
      picture: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      name: 'product2',
      inventory: 30,
      picture: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      name: 'product3',
      inventory: 50,
      picture: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
  ];

  filteredItems: Item[] = [];

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue?.toLowerCase() ?? '';
    this.filteredItems = this.filteredItem();
    console.log(this.filteredItems);
    console.log(this.searchValue);
  }

  inventoryChangeSubmit(): void{
  }

  filteredItem(): Item[] {
    return this.Items.filter((item) =>
      item.name?.toLowerCase().includes(this.searchValue)
    );
  }
}
