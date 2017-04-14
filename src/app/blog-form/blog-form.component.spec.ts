import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BlogFormComponent } from './blog-form.component';
import { ShowErrorComponent } from '../show-error/show-error.component';

describe('BlogFormComponent', () => {
    let component: BlogFormComponent;
    let fixture: ComponentFixture <BlogFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                imports: [ FormsModule ],
                declarations: [ BlogFormComponent, ShowErrorComponent ]
            }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogFormComponent);
        component = fixture.componentInstance;
        fixture.autoDetectChanges(true);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should validate the title correctly', ( ) => {
        fixture.whenStable().then(() => {
            const form = component.form.form; // form is from the @ViewChild dir.
            const titleControl = form.get('title');
            expect(titleControl.errors['required']).toBeTruthy();
            titleControl.setValue('A vanilla title');
            expect(titleControl.errors['required']).toBeUndefined();
            // done();
        });
    });
});
