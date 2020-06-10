import { Component, OnInit, Input } from '@angular/core';
import { FeedRss } from 'src/app/models/feedRss';
import { FeedService } from 'src/app/services/feed.service';
import { ActivatedRoute } from '@angular/router';
import { FeedUtils } from 'src/app/utils/FeedUtils';

@Component({
  selector: 'app-listagem-noticias-component',
  templateUrl: './listagem-noticias.component.html',
  styleUrls: ['./listagem-noticias.component.css']
})
export class ListagemNoticias implements OnInit {

  // @Input()
  linkRss: string;

  feedRss: FeedRss;

  constructor(private feedService: FeedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.linkRss = params['linkRss'];
      this.feedService.getFeedUrl(this.linkRss).subscribe(res => {
        this.feedRss = FeedUtils.extractFeeds(res);
        console.log(res);
      })
    })
  }

}
