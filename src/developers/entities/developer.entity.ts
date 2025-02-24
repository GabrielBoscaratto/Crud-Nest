import { Column } from 'typeorm';

const {nanoid} = require('nanoid');

export class Developer {
  @Primarycolumn()
  id: string; // developer id
  @Column()
  name: string; // developer name
  @Column()
  email: string; // developer email
  @Column()
  dateofbirth: string; // developer date of birth

  generateId() {
    this.id = `dev_${nanoid()}`;
  }
}
