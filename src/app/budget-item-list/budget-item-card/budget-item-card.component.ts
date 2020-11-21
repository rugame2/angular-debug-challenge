import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/app/shared/budget-item';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem | any;

  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();

  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  
  onXButtonClick(){
    // Send signal to the x button to delete the card
    this.xButtonClick.emit();
  }

  onCardClick(){
    this.cardClick.emit()
  }

  ngOnInit(): void {
  }

}
