import { Component, OnInit, Input, Inject } from '@angular/core';
import { BudgetItem } from '../shared/budget-item';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponentComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EditItemModalComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) { }

    //onSubmitted method which handles new updates
    onSubmitted(updatedItem:BudgetItem){
      this.dialogRef.close(updatedItem)
    }

  ngOnInit(): void {
  }

}
