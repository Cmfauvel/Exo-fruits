import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFruitsComponent } from './table-fruits.component';

describe('TableFruitsComponent', () => {
  let component: TableFruitsComponent;
  let fixture: ComponentFixture<TableFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
