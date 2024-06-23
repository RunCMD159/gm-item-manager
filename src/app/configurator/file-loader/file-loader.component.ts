import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-file-loader',
  standalone: true,
  imports: [],
  templateUrl: './file-loader.component.html',
  styleUrl: './file-loader.component.scss'
})
export class FileLoaderComponent {

  @Output() fileContent = new EventEmitter<string>();

  onChange(event: any) {
    if (event && event.target && event.target.files && event.target.files.length === 1) {
      const file = event.target.files[0] as File;
      if (file.type === 'application/json') {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          // The file's text will be printed here
          console.log(e.target.result);
          this.fileContent.emit(e.target.result);
        };

        reader.readAsText(file);
      }
    }
  }
}
