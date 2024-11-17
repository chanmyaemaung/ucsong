import { Injectable } from '@angular/core';
import { ISong } from '@core/interfaces/song.interface';
import { IPledge } from '@core/interfaces/pledge.interface';
import { IDailyCode } from '@core/interfaces/daily-code.interface';
import { INavItem } from '@core/interfaces/nav.interface';
import { ISettings } from '@core/interfaces/settings.interface';
import { IFooter } from '@core/interfaces/footer.interface';
import { IHero } from '@core/interfaces/hero.interface';

/**
 * Mock data service provides temporary data for development
 * Following Single Responsibility Principle by handling only mock data
 * @class MockDataService
 */
@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  /** Mock songs data */
  private songs: ISong[] = [
    {
      id: 1,
      number: '1',
      title: {
        my: 'အဖနှင့်အတူ',
        en: 'My Father',
        th: 'พ่อของฉัน',
      },
      author: {
        my: 'True Parents',
        en: 'True Parents',
        th: 'True Parents',
      },
      lyrics: {
        my: [
          'အဖနှင့်အတူ ကျွန်ုပ်လျှောက်လှမ်းမည်',
          'အဖနှင့်အတူ ကျွန်ုပ်နေထိုင်မည်',
          'အဖ၏ မေတ္တာဖြင့် ကျွန်ုပ်အသက်ရှင်မည်',
          'အဖ၏ ကတိတော်အတိုင်း ကျွန်ုပ်လိုက်လျှောက်မည်',
        ],
        en: [
          'I will walk with my Father',
          'I will live with my Father',
          "I will live with Father's love",
          "I will follow Father's promise",
        ],
        th: [
          'ฉันจะเดินไปกับพ่อ',
          'ฉันจะอยู่กับพ่อ',
          'ฉันจะมีชีวิตอยู่ด้วยความรักของพ่อ',
          'ฉันจะทำตามสัญญาของพ่อ',
        ],
      },
    },
    {
      id: 2,
      number: '2',
      title: {
        my: 'မိသားစုကတိသစ္စာ',
        en: 'Family Pledge',
        th: 'คำปฏิญาณครอบครัว',
      },
      author: {
        my: 'True Parents',
        en: 'True Parents',
        th: 'True Parents',
      },
      lyrics: {
        my: [
          'ကျွန်ုပ်တို့ မိသားစုသည် ဘုရားသခင်၏ မူလနိုင်ငံတော်ကို',
          'မူလဖန်ဆင်းခြင်း၏ စံနှုန်းအတိုင်း ပြန်လည်တည်ထောင်ရန်',
          'ကတိပြုပါသည်။',
        ],
        en: [
          'Our family pledges to restore the original kingdom of God',
          'according to the standard of the original creation',
          'We make this pledge.',
        ],
        th: [
          'ครอบครัวของเราปฏิญาณที่จะฟื้นฟูอาณาจักรดั้งเดิมของพระเจ้า',
          'ตามมาตรฐานของการสร้างดั้งเดิม',
          'เราทำคำปฏิญาณนี้',
        ],
      },
    },
  ];

  /** Mock pledge data */
  private pledge: IPledge = {
    title: {
      my: 'မိသားစု ကတိသစ္စာ',
      en: 'Family Pledge',
      th: 'คำปฏิญาณครอบครัว',
    },
    content: {
      my: [
        '၁။ ကျွန်ုပ်တို့မိသားစုသည် မူလဖန်ဆင်းခြင်း၏ စံနှုန်းအတိုင်း ဘုရားသခင်၏ မူလနိုင်ငံတော်ကို ပြန်လည်တည်ထောင်ရန် ကတိပြုပါသည်။',
        '၂။ ကျွန်ုပ်တို့မိသားစုသည် အမှန်တရား၊ အမှန်တကယ်သောအသက်နှင့် အမှန်တကယ်သောမေတ္တာတရားကို လက်တွေ့ကျင့်သုံးရန် ကတိပြုပါသည်။',
        '၃။ ကျွန်ုပ်တို့မိသားစုသည် မျိုးဆက်လေးဆက်ကို အခြေခံ၍ မိသားစုတန်ဖိုးများကို ထိန်းသိမ်းစောင့်ရှောက်ရန် ကတိပြုပါသည်။',
      ],
      en: [
        '1. Our family pledges to restore the original kingdom of God according to the standard of the original creation.',
        '2. Our family pledges to practice true love, true life and true lineage.',
        '3. Our family pledges to preserve family values based on four generations.',
      ],
      th: [
        '1. ครอบครัวของเราปฏิญาณที่จะฟื้นฟูอาณาจักรดั้งเดิมของพระเจ้าตามมาตรฐานของการสร้างดั้งเดิม',
        '2. ครอบครัวของเราปฏิญาณที่จะปฏิบัติความรักที่แท้จริง ชีวิตที่แท้จริง และสายเลือดที่แท้จริง',
        '3. ครอบครัวของเราปฏิญาณที่จะรักษาคุณค่าครอบครัวบนพื้นฐานของสี่รุ่น',
      ],
    },
  };

  /** Mock daily codes */
  private dailyCodes: IDailyCode[] = [
    {
      id: 1,
      title: {
        my: 'နေ့စဉ်သုံး ကျမ်းစကား',
        en: 'Daily Scripture',
        th: 'พระคัมภีร์ประจำวัน',
      },
      content: {
        my: 'မေတ္တာသည် စိတ်ရှည်တတ်၏။ မေတ္တာသည် ကျေးဇူးပြုတတ်၏။',
        en: 'Love is patient, love is kind.',
        th: 'ความรักนั้นก็อดทนนาน ความรักนั้นก็กระทำคุณให้',
      },
    },
    {
      id: 2,
      title: {
        my: 'နေ့စဉ်သုံး ဆုတောင်းချက်',
        en: 'Daily Prayer',
        th: 'คำอธิษฐานประจำวัน',
      },
      content: {
        my: 'အဖဘုရား၊ ကိုယ်တော်၏ မေတ္တာတော်ကို ကျွန်ုပ်တို့အား ပြသတော်မူသည့်အတွက် ကျေးဇူးတင်ပါသည်။',
        en: 'Heavenly Father, thank you for showing us Your love.',
        th: 'พระบิดาเจ้า ขอบคุณที่ทรงสำแดงความรักของพระองค์แก่เรา',
      },
    },
  ];

  /** Navigation items with translations */
  private navItems: INavItem[] = [
    {
      path: '/',
      label: {
        my: 'ပင်မစာမျက်နှာ',
        en: 'Home',
        th: 'หน้าแรก',
      },
      exact: true,
    },
    {
      path: '/songs',
      label: {
        my: 'သီချင်းများ',
        en: 'Songs',
        th: 'เพลง',
      },
      exact: false,
    },
    {
      path: '/pledge',
      label: {
        my: 'ကတိသစ္စာ',
        en: 'Pledge',
        th: 'คำปฏิญาณ',
      },
      exact: true,
    },
  ];

  /** Settings translations */
  private settings: ISettings = {
    title: {
      my: 'ဆက်တင်များ',
      en: 'Settings',
      th: 'การตั้งค่า',
    },
    appearance: {
      label: {
        my: 'အသွင်အပြင်',
        en: 'Appearance',
        th: 'ธีม',
      },
      options: {
        light: {
          my: 'အလင်းရောင်',
          en: 'Light',
          th: 'สว่าง',
        },
        dark: {
          my: 'အမှောင်ရောင်',
          en: 'Dark',
          th: 'มืด',
        },
      },
    },
    language: {
      label: {
        my: 'ဘာသာစကား',
        en: 'Language',
        th: 'ภาษา',
      },
    },
    done: {
      my: 'ပြီးပါပြီ',
      en: 'Done',
      th: 'เสร็จสิ้น',
    },
  };

  /** Hero section translations */
  private hero: IHero = {
    title: {
      my: 'သီချင်းစာအုပ်',
      en: 'Holy Song Book',
      th: 'หนังสือเพลง',
    },
    subtitle: {
      my: 'သင့်နှစ်သက်ရာ ဘာသာစကားဖြင့် ဝိညာဉ်ရေးရာ သီချင်းများကို လေ့လာပါ',
      en: 'Explore spiritual songs and pledges in your preferred language',
      th: 'ค้นหาเพลงและคำปฏิญาณในภาษาที่คุณต้องการ',
    },
    search: {
      label: {
        my: 'သီချင်းရှာရန်',
        en: 'Search Songs',
        th: 'ค้นหาเพลง',
      },
      placeholder: {
        my: 'ခေါင်းစဉ်၊ နံပါတ် သို့မဟုတ် ရေးသားသူဖြင့် ရှာပါ...',
        en: 'Search by title, number or author...',
        th: 'ค้นหาตามชื่อ หมายเลข หรือผู้แต่ง...',
      },
    },
    toggleView: {
      grid: {
        my: 'ဇယားပုံစံပြပါ',
        en: 'Show Grid',
        th: 'แสดงตาราง',
      },
      list: {
        my: 'စာရင်းပုံစံပြပါ',
        en: 'Show List',
        th: 'แสดงรายการ',
      },
    },
  };

  /** Footer translations */
  private footer: IFooter = {
    credit: {
      my: 'Chan Lay မှ ဖန်တီးတင်ဆက်သည်',
      en: 'Developed and offered by Chan Lay',
      th: 'พัฒนาและนำเสนอโดย Chan Lay',
    },
    contact: {
      label: {
        my: 'ဆက်သွယ်ရန်',
        en: 'Contact Us',
        th: 'ติดต่อเรา',
      },
      project: {
        my: 'စီမံကိန်းဆွေးနွေးရန်',
        en: 'Discuss Project',
        th: 'หารือโครงการ',
      },
      donate: {
        my: 'လှူဒါန်းရန်',
        en: 'Donate',
        th: 'บริจาค',
      },
    },
  };

  /**
   * Get all songs
   * @returns {ISong[]} Array of songs
   */
  getSongs(): ISong[] {
    return this.songs;
  }

  /**
   * Get song by ID
   * @param {number} id - Song ID
   * @returns {ISong | undefined} Song if found
   */
  getSongById(id: number): ISong | undefined {
    return this.songs.find((song) => song.id === id);
  }

  /**
   * Get pledge data
   * @returns {IPledge} Pledge data
   */
  getPledge(): IPledge {
    return this.pledge;
  }

  /**
   * Get daily codes
   * @returns {IDailyCode[]} Array of daily codes
   */
  getDailyCodes(): IDailyCode[] {
    return this.dailyCodes;
  }

  /**
   * Search songs by query
   * @param {string} query - Search query
   * @param {string} lang - Language code
   * @returns {ISong[]} Array of matching songs
   */
  searchSongs(query: string, lang: string): ISong[] {
    const lowercaseQuery = query.toLowerCase();
    return this.songs.filter(
      (song) =>
        song.number.toLowerCase().includes(lowercaseQuery) ||
        song.title[lang as keyof typeof song.title]
          .toLowerCase()
          .includes(lowercaseQuery) ||
        song.author[lang as keyof typeof song.author]
          .toLowerCase()
          .includes(lowercaseQuery)
    );
  }

  /**
   * Get navigation items
   * @returns {INavItem[]} Array of navigation items
   */
  getNavItems(): INavItem[] {
    return this.navItems;
  }

  /**
   * Get settings translations
   * @returns {ISettings} Settings translations
   */
  getSettings(): ISettings {
    return this.settings;
  }

  /**
   * Get hero section translations
   * @returns {IHero} Hero section translations
   */
  getHero(): IHero {
    return this.hero;
  }

  /**
   * Get footer translations
   * @returns {IFooter} Footer translations
   */
  getFooter(): IFooter {
    return this.footer;
  }
}
