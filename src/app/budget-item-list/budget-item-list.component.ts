import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditItemModalComponentComponent } from '../edit-item-modal/edit-item-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from '../shared/budget-item';

// TODO Add Modal 
@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = [];

  // Adding Outputs for Updates and Deletes
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor( public dialog: MatDialog) { }

  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  ngOnInit(): void {
  }

  onDelete(item: BudgetItem){
    this.delete.emit(item);
  }

  //Update Method
  onCardClicked(item: BudgetItem){
    // Show the Edit Modal from Angular Material
    const dialogref = this.dialog.open(EditItemModalComponentComponent, {
      width: '580px',
      data: item
    })

    // Handle the dialog box after the user clicks away
    dialogref.afterClosed().subscribe(result => {


      if(result){
        this.update.emit({
          old:item,
          new:result
        })
      }
    })
  }

}


export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}