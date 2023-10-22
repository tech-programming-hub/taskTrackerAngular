import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input()
  buttonText: string = '';

  @Input()
  buttonColor: any = '';

  @Output()
  buttonClick = new EventEmitter();

  public getBackgroundColor(): any {
    return this.buttonColor;
  }

  public onButtonClick(): any {
    this.buttonClick.emit();
  }

}
