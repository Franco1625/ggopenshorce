import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {

  currentLang = 'es';
  languages = ['es', 'en'];

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang || 'es';
  }

  useLanguage(language: string): void {
    this.currentLang = language;
    this.translate.use(language);
  }

}
