import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    public readonly product_key = 'contacts';
    public readonly tag_key = 'tags';

    public contacts = [

    ];


    public getContactsFromStorage() {
        const contacts = JSON.parse(localStorage.getItem(this.product_key) || '[]');
        return contacts;
    }

    public setContactsToStorage(contacts: any) {
        localStorage.setItem(this.product_key, JSON.stringify(contacts));
    }


    public getContacts() {
        if (!this.getContactsFromStorage().length) {
            this.setContactsToStorage(this.contacts);
        }
        this.contacts = this.getContactsFromStorage()
        return this.contacts;
    }

}

