import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {filter, map, Observable, startWith} from 'rxjs';

@Component({
  selector: 'app-mat-auto-complete-demo',
  standalone: false,

  templateUrl: './mat-auto-complete-demo.component.html',
  styleUrl: './mat-auto-complete-demo.component.css'
})
export class MatAutoCompleteDemoComponent implements OnInit {
  /**
   * https://material.angular.io/components/autocomplete/overview
   * Demo here is with autocomplete and reactive forms (tried to make template form, but failed).
   */

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
