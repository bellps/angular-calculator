import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent implements OnInit {
  screenValue = '';
  result = '';
  historic: object[] = [];

  add(value): void {
    this.screenValue += value;
  }

  equal(): void {
    try {
      this.result = (eval(this.screenValue)).toString();
      if (this.result === 'Infinity') {
        this.screenValue = 'Divisão por 0 é inválida!';
      } else {
        this.historic.push({count: this.screenValue, result: this.result});
        this.screenValue = this.result;
      }
    } catch (error) {
      this.clean();
      alert('Um erro ocorreu: ' + error.message);
    }
  }

  clean(): void {
    this.screenValue = '';
  }

  erase(): void{
    this.screenValue = this.screenValue.slice(0, -1);
  }
  constructor(private modalService: NgbModal) {}

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'calculator-history'});
  }

  ngOnInit(): void {
  }

}
