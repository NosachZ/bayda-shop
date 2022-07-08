import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  language!: string;

  constructor() { }

  getLanguage(): string {
    let lang = localStorage.getItem("language");
    if(!lang) {
      this.setLanguage("ru-RU")
    }
    else {
      this.language = lang;
    }
    return this.language;
  }

  setLanguage(lang: string) {
    this.language = lang;
    localStorage.setItem("language", lang);
  }
}
