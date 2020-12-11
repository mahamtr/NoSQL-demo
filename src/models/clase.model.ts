import {Entity, model, property} from '@loopback/repository';

@model()
export class Clase extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'object',
    required: true,
  })
  docente: object;

  @property({
    type: 'object',
    required: true,
  })
  horario: object;

  @property({
    type: 'number',
    required: true,
  })
  cupos: number;

  @property({
    type: 'boolean',
    required: true,
  })
  esVirtual: boolean;


  constructor(data?: Partial<Clase>) {
    super(data);
  }
}

export interface ClaseRelations {
  // describe navigational properties here
}

export type ClaseWithRelations = Clase & ClaseRelations;
