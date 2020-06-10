import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedRss } from '../models/feedRss';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

  constructor(private httpClient: HttpClient) { }

  getFeedUrl(url: string): Observable<any> {
    return this.httpClient.get(this.rssToJsonServiceBaseUrl + url);
  }


}
