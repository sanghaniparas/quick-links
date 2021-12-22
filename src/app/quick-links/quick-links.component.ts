import { Component, OnInit } from '@angular/core';
import { QuickLinks } from '../shared/model/quickLinks';
import { SharepointService } from '../shared/services/sharepoint.service';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {
  QuickLinksData: QuickLinks[] = [];
  constructor(private sharepointService: SharepointService) { }

  ngOnInit() {
    this.getquickLinksData();
  }

  getquickLinksData() {
    this.sharepointService.getQuickLinkData().then((res) => {
      this.QuickLinksData = res;
      console.log("res",res)
    });
  }


  openLink(quickLink: any) {
    window.open(quickLink, "_blank");
  }
} 
