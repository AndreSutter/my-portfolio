import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import en from '../assets/i18n/en.json';
import de from '../assets/i18n/de.json';

export type Lang = 'en' | 'de';

type TranslationDictionary = Record<string, string | string[]>;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly dict: Record<Lang, TranslationDictionary> = { en, de };

  private readonly current$ = new BehaviorSubject<Lang>(
    (localStorage.getItem('lang') as Lang) || 'en'
  );

  readonly lang$ = this.current$.asObservable();

  constructor() {
    this.current$.subscribe((lang) => localStorage.setItem('lang', lang));
  }

  setLanguage(lang: Lang) {
    this.current$.next(lang);
  }

  toggle() {
    const newLang = this.current$.value === 'en' ? 'de' : 'en';
    this.current$.next(newLang);
  }

  get(key: string): string | string[] {
    return this.dict[this.current$.value][key] ?? key;
  }

  all(): TranslationDictionary {
    return this.dict[this.current$.value];
  }

  getCurrentLang(): Lang {
    return this.current$.value;
  }
}
