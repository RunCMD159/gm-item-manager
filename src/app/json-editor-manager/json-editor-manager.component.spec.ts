import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JsonEditorManagerComponent} from './json-editor-manager.component';

describe('JsonEditorManagerComponent', () => {
  let component: JsonEditorManagerComponent;
  let fixture: ComponentFixture<JsonEditorManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonEditorManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonEditorManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
