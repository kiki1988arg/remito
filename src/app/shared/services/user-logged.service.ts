import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {
  public supplierMr: string;
  public culture: string;
  public internalId: string;
  constructor() { }
}
