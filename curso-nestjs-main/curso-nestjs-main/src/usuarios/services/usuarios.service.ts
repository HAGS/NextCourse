import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
  users = [
    { id: 1, nombre: 'Hugo', apellidos: 'Gaytan' },
    { id: 2, nombre: 'Alberto', apellidos: 'Santellan' },
    { id: 3, nombre: 'Jorge', apellidos: 'Garcia' },
    { id: 4, nombre: 'Gabriela', apellidos: 'Herrera' },
  ];

  getUsers() {
    return this.users;
  }

  updateUser(id: number, data: { nombre: string; apellidos: string }) {
    const idx = this.users.findIndex((el) => el.id == id);

    if (idx >= 0) {
      this.users[idx].nombre = data.nombre;
      this.users[idx].apellidos = data.apellidos;
      return this.users[idx];
    }
    return null;
  }
}
