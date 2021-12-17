import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lang } from '@ts/Lang';

@Injectable()
export class LanguageService {
    Language: Lang = Lang.TW;
    get lang(): Lang {
        return this.Language;
    }
    set lang(lang: Lang) {
        this.Language = lang;
    }
    LangObj: any = {};
    constructor(private http: HttpClient) { }
    getLang(_Lang: Lang) {
        this.Language = _Lang;
        this.http.get(`assets/fill/${this.Language}.json`)
            .subscribe(json => this.LangObj = json);
    }
}