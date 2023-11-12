import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
      // Add any necessary imports, providers, etc.
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  // Adjust or remove this test if 'title' property does not exist in AppComponent
  it(`should have as title 'world-map-app'`, () => {
    expect(app.title).toEqual('world-map-app');
  });

  // Adjust this test to match how the title is actually rendered in your component
  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Update the query selector and text content to match your actual template
    expect(compiled.querySelector('.content span')?.textContent).toContain('world-map-app app is running!');
  });
});
