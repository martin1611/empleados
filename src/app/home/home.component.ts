import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public empleados:any = [];
    public empleados2:any = [];
    public salarioporEmpleado;
    public id:number = 0;
    public mostrar:boolean = false;
  constructor( private _api: DataService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this._api.empleados().subscribe(response => {
      //console.log('reponse', response);
      this.empleados = response;
      this.empleados2 = response;
      let salario = 0;
      for (let emp of this.empleados) {
        if(emp.contractTypeName == "HourlySalaryEmployee") {
          this.salarioporEmpleado = 120 * emp.hourlySalary * 12;
          emp.salrioPorEmpleado = this.salarioporEmpleado
        }else {
          this.salarioporEmpleado = emp.monthlySalary * 12;
          emp.salrioPorEmpleado = this.salarioporEmpleado
        }
      }
    })
  }

  getEmpleado(id){
    
    this.mostrar = false;
    if(id == 0  || id == null) {
      this.getEmpleados();
      this.mostrar =true;
    }else {
      this.empleados = [];
      let copyEmpleado = this.empleados2.find(element => element.id == id);
      this.empleados.push(copyEmpleado);
      
      this.mostrar = true;
    }

  }

  

}
