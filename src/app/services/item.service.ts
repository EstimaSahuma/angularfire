import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private firestore: AngularFirestore) 
  { 

  }

  storeItem(item: any): Promise<any>
  {
    return this.firestore.collection('items').add(item);
  }

  getItem(): Observable<any> {
    return this.firestore.collection('items').snapshotChanges();
  }

  deleteItem(id: string): Promise<any>
  {
    return this.firestore.collection('items').doc(id).delete();
  }
}
