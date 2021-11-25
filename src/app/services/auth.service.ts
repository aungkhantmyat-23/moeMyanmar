import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLogin = false;
  constructor() {}
  get isLogin() {
    return this._isLogin;
  }
}
