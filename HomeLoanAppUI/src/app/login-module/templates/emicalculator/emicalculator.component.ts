import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EMIcalculatorComponent {


  @ViewChild('loanChart') loanChartRef: ElementRef;
  loanAmount: number;
  loanTenure: number;
  loanRate: number;
  loanEmi: number;
  loanPrinciple: number;
  loanTotal: number;
  loanInterest: number;

  ngOnInit() {

  }

  calculateLoan() {
    const amount = this.loanAmount;
    const tenure = this.loanTenure * 12;
    const rate = this.loanRate / 12 / 100;

    const emi = (amount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    const total = emi * tenure;
    const interest = total - amount;

    this.loanEmi = Math.floor(emi);
    this.loanPrinciple = Math.floor(amount);
    this.loanTotal = Math.floor(total);
    this.loanInterest = Math.floor(interest);

    // Loan chart
    const xValues = ['Principle', 'Interest'];
    const yValues = [amount, Math.floor(interest)];
    const barColors = ['#961251', '#000000'];

    new Chart(this.loanChartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Pie Chart'
          }
        }
      }
    });
  }
}


