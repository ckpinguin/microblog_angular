import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { BlogListComponent } from './modules/blog/blog-list/blog-list.component';
import { BlogItemComponent } from './modules/blog/blog-item/blog-item.component';
import { EditBlogEntryFormComponent } from './modules/blog/edit-blog-entry-form/edit-blog-entry-form.component';
import { ShowErrorComponent } from './components/show-error/show-error.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [
                AppComponent,
                LayoutComponent,
                NavBarComponent,
                BlogListComponent,
                BlogItemComponent,
                EditBlogEntryFormComponent,
                ShowErrorComponent
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'CK\'s microblog!'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('CK\'s microblog!');
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('CK\'s microblog!');
    }));
});
