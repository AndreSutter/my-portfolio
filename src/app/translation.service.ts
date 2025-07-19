import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import en from '../assets/i18n/en.json';
import de from '../assets/i18n/de.json';

export type Lang = 'en' | 'de';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly dict: Record<Lang, Record<string, string>> = { en, de };

  private readonly current$ = new BehaviorSubject<Lang>(
    (localStorage.getItem('lang') as Lang) || 'en'
  );

  readonly lang$ = this.current$.asObservable();

  constructor() {
    // Sprache im localStorage merken
    this.current$.subscribe((lang) => localStorage.setItem('lang', lang));
  }

  setLanguage(lang: Lang) {
    this.current$.next(lang);
  }

  toggle() {
    const newLang = this.current$.value === 'en' ? 'de' : 'en';
    this.current$.next(newLang);
  }

  get(key: string): string {
    return this.dict[this.current$.value][key] ?? key;
  }

  all(): Record<string, string> {
    return this.dict[this.current$.value];
  }

  getCurrentLang(): Lang {
    return this.current$.value;
  }
}
