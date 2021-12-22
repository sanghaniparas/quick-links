import { Injectable } from '@angular/core';
import pnp from '@pnp/pnpjs';
import { Constant } from 'src/app/app.constant';
import { QuickLinks } from '../model/quickLinks';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {

  constructor() { }

  getQuickLinkData(): Promise<QuickLinks[]> {
    return new Promise((resolve, reject) => {
      pnp.sp.web.lists
        .getByTitle(Constant.QUICK_LINKS)
        .items.select("*")
        .get()
        .then((result) => {
          resolve(result);
        })
        .catch(err => reject(err));
    });
  }
}
