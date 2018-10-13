import { Component, OnInit } from '@angular/core';
import {Post} from '../../Model/Post';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../Services/article.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-art-style',
  templateUrl: './art-style.component.html',
  styleUrls: ['./art-style.component.css']
})
export class ArtStyleComponent implements OnInit {
  sub: Subscription;
  post: Post;
  constructor(private route: ActivatedRoute, private router: Router, private aService: ArticleService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.aService.findPost(id).subscribe(data => {
          if (data.found) {
            this.post = data.post;
          } else {
            this.router.navigate(['/notfound']);
          }
        });
      }
    });
  }
}
