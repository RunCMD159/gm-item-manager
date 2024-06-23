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
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      // The file's text will be printed here
      console.log(e.target.result);
      this.fileContent.emit(e.target.result);
    };

    reader.readAsText(file);
  }
}
