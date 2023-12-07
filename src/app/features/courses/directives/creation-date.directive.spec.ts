import { Component, DebugElement } from '@angular/core';
import { CreationDateDirective } from './creation-date.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div>
    <div id="test" [appCreationDate]="date">test</div>
    <div id="test2" [appCreationDate]="date2">test</div>
    <div id="test3" [appCreationDate]="date3">test</div>
    <div id="test4" [appCreationDate]="date4">test</div>
  </div>`,
})
class TestComponent {
  date = new Date();
  date2 = new Date();
  date3 = new Date();
  date4 = null;

  constructor() {
    this.date.setDate(this.date.getDate() - 1);
    this.date2.setDate(this.date2.getDate() + 1);
    this.date3.setMonth(this.date2.getMonth() - 1);
  }
}

describe('CreationDateDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let div: DebugElement;
  let border: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, CreationDateDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should make border green when date is past date', () => {
    div = fixture.debugElement.query(By.css('#test'));
    border = div.nativeElement.style.border as string;

    expect(border).toBe('1px solid green');
  });

  it('should make border blue when date is future date', () => {
    div = fixture.debugElement.query(By.css('#test2'));
    border = div.nativeElement.style.border as string;
    
    expect(border).toBe('1px solid blue');
  });

  it('should do nothing when date is older than now + 14 day', () => {
    div = fixture.debugElement.query(By.css('#test3'));
    border = div.nativeElement.style.border as string;
    
    expect(border).toBe('');
  });

  it('should do nothing when date is null', () => {
    div = fixture.debugElement.query(By.css('#test4'));
    border = div.nativeElement.style.border as string;
    
    expect(border).toBe('');
  });
});
