export class QuickLinks {
    ID: number;
    Title: string;
    TitleIcon: string;
    LinkUrl: any;
  
    constructor(obj?) {
      this.ID = (obj && obj.ID) || undefined;
      this.Title = (obj && obj.Title) || "";
      this.TitleIcon = (obj && obj.TitleIcon) || "";
      this.LinkUrl = (obj && obj.LinkUrl) || null;
    }
  }
  