import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '@core/services/language.service';

@Component({
  selector: 'app-pledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pledge.component.html',
  styleUrls: ['./pledge.component.css'],
})
export class PledgeComponent {
  languageService = inject(LanguageService);
  currentLang = this.languageService.currentLanguage;

  pledges = {
    en: [
      'As the owner of Cheon Il Guk, Our family pledges to seek our original homeland...',
      'Our family pledges to represent and become central to heaven and earth...',
      // Add more English pledges
    ],
    my: [
      'ချွန်အီးဂွတ်၏ ပိုင်ရှင်အနေဖြင့်၊ မူလဇာတိမြေကို ရှာဖွေရန်နှင့်...',
      'ကျွန်ုပ်တို့မိသားစုသည် ကောင်းကင်နှင့်မြေကြီးကို ကိုယ်စားပြု၍...',
      // Add more Myanmar pledges
    ],
    th: [
      'ในฐานะเจ้าของชอนอิลกุก ครอบครัวของเราสาบานว่าจะแสวงหาบ้านเกิด...',
      'ครอบครัวของเราสาบานที่จะเป็นตัวแทนและเป็นศูนย์กลางของสวรรค์และโลก...',
      // Add more Thai pledges
    ],
  };
}
