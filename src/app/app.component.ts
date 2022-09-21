import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Variable to store shortLink from api response
  shortLink: string = '';
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  // Inject service
  constructor(private fileUploadService: HelloService) {}

  ngOnInit(): void {}

  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe((event: any) => {
      if (typeof event === 'object') {
        // Short link via api response
        this.shortLink = event.link;

        this.loading = false; // Flag variable
      }
    });
  }
}
