import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {

  items: any[];
  activeItem: any;

  constructor(private router: Router){

    this.items = [
      { label: 'Punto uno', icon: 'pi pi-fw pi-file', link:'one', },
      { label: 'Punto dos', icon: 'pi pi-fw pi-file', link:'two', },
      { label: 'Punto tres', icon: 'pi pi-fw pi-file', link:'three', },
      { label: 'Punto cuatro', icon: 'pi pi-fw pi-file', link:'four', },
      { label: 'Punto cinco', icon: 'pi pi-fw pi-file', link:'five', },
    ];

  }

  ngOnInit() {

    const itemLocal = JSON.parse(localStorage.getItem('item')!);
  
    if (itemLocal) {

      const filteredItems = this.items.filter(item => item.link === itemLocal.link);
      
      if (filteredItems.length > 0) {
        this.activeItem = filteredItems[0];
      }

    } else {
      this.activeItem = this.items[0];
    }

  }

  onActiveItemChange(item: any) {

    localStorage.setItem('item', JSON.stringify(item))

    if (item.link) {
      this.router.navigate([item.link]);
    }

  }

}
