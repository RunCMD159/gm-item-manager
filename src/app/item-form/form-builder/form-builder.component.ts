import {Component, inject, Input, OnInit} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {FormConfiguration, NumberInput, Select, TextInput} from "../form-configuration.types";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent implements OnInit {
  @Input() configuration!: FormConfiguration;
  private formBuilder = inject(FormBuilder)
  public itemForm = new FormGroup({});

  ngOnInit(): void {
    Object.keys(this.configuration).forEach(key => {
      const entry = this.configuration[key];
      if (!entry.hasOwnProperty('type')) {
        //TODO: implement lists and recursion
        this.formBuilder.group('')
      } else {
        const leaf = entry as TextInput | NumberInput | Select
        this.itemForm.addControl(key, new FormControl(key, leaf.required ? [Validators.required] : null));
      }
    });
    console.log(this.itemForm)
  }
}
