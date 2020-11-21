import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importing the communication to angular via forms
import { BudgetItem } from '../shared/budget-item';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})

export class AddItemFormComponent implements OnInit {

  // Two-Way Data Binding via inputs and outputs 
  // While also using a event emitter to display 
  // The form data

  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter

  constructor() { }

  // Creation of onSubmit method to submit our form data
  onSubmit(form: NgForm){
    console.log(this.formSubmit.emit(form.value));
  }

  ngOnInit(): void {
  }

}