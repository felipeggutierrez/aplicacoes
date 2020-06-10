import { FeedRss } from '../models/feedRss';

export class FeedUtils {

public static extractFeeds(res: any): FeedRss {
    let feed = JSON.parse(JSON.stringify(res));
    return feed || { };
  }
}