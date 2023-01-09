import { TestBed } from '@angular/core/testing';
import { DialComponent} from './dialcode.component';

describe('DialComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        
      ],
      declarations: [
        DialComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DialComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
