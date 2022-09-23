import { UntypedFormBuilder } from "@angular/forms";

export class products {
  _id = UntypedFormBuilder;
  id: number;
  name: string;
  description: string;
  price: number;
  units: number;
  constructor(id: number, name: string, description: string, price: number, units: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.units = units;
  }

}
