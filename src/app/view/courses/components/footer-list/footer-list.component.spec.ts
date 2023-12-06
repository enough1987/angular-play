import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FooterListComponent } from './footer-list.component';

describe('FooterListComponent', () => {
  let component: FooterListComponent;
  let fixture: ComponentFixture<FooterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [FooterListComponent]
    });
    fixture = TestBed.createComponent(FooterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
