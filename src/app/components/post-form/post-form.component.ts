import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();

  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(
        post => {
          this.newPost.emit(post);
        });
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }
}
