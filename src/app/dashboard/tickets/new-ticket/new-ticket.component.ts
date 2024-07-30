import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  //@Output() add = new EventEmitter<{ title: string; text: string }>();
  add = output<{ title: string; text: string }>();

  enteredText = '';
  enteredTitle = '';

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form()?.nativeElement);
  }
  onSubmit(titleElement: HTMLInputElement, textInput: HTMLTextAreaElement) {
    //this.form?.nativeElement.reset();
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    //this.form()?.nativeElement.reset();
    this.enteredText = '';
    this.enteredTitle = '';
  }
}
