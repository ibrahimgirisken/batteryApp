import { Component, VERSION } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public title = `Angular ${VERSION.major} i18n with ngx-translate`;

  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(["tr", "en"]);
  }
  public get translationFormTypeScript(): string {
    return this.translateService.instant("example5.fromTypeScript");
  }
  public onChange(selectedLanguage: string): void {
    this.translateService.use(selectedLanguage);
  }
}
