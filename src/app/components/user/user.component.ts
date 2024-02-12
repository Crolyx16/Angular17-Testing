import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaOperativo } from '../../interfaces/sistema-operativo';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() empleo: string = "";
  @Output() saludo: EventEmitter<string> = new EventEmitter<string>();

  username: string = "Carlos";
  usuarioExiste: boolean = true;
  sistemasOperativos: SistemaOperativo[] = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  esEditable: boolean = true;
  osMarcado: string = "";
  onMouseOver(osName: string): void {
    this.osMarcado = osName;
  }
  emitirAlPadre():void {
    this.saludo.emit("Hola!, soy tu componente hijo");
  }
}
