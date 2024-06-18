import {Component, inject, Input, OnInit} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {FormConfiguration, NumberInput, Select, TextInput} from "../form-configuration.types";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
    // Object.keys(this.configuration).map(key => {
    //   const entry = this.configuration[key];
    //   if (!entry.hasOwnProperty('type')) {
    //     //TODO: implement lists and recursion
    //     return new FormGroup({})
    //   } else {
    //     const leaf = entry as TextInput | NumberInput | Select
    //     return this.itemForm.addControl(key, new FormControl(key, leaf.required ? [Validators.required] : null));
    //   }
    // });
    this.createFormStructure(this.itemForm, this.configuration)
    console.log(this.itemForm)
  }

  createFormStructure(form: FormGroup, configuration: FormConfiguration): any {
    return Object.entries(configuration).map(entry => {
      if (entry[1].hasOwnProperty("type")) {
        return form.addControl(entry[0], new FormControl(entry[0], (entry[1] as (TextInput | NumberInput| Select)).required ? Validators.required : undefined))
      } else if (Array.isArray(entry[1])) {
        return form.addControl(entry[0],new FormControl({}))
      } else {
        const g = new FormGroup({})
        this.createFormStructure(g,entry[1] as FormConfiguration)
        return form.addControl(entry[0],g);
      }
    })
  }
}
