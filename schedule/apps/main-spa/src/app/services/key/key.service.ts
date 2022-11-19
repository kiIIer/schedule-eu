import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KeyService {

  getKey(): string {
    return environment.key;
  }
}
