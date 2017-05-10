import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EditBlogEntryFormComponent } from './edit-blog-entry-form.component';
import { ShowErrorComponent } from '../show-error/show-error.component';

describe('EditBlogEntryFormComponent', () => {
    let component: EditBlogEntryFormComponent;
    let fixture: ComponentFixture <EditBlogEntryFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                imports: [ FormsModule ],
                declarations: [ EditBlogEntryFormComponent, ShowErrorComponent ]
            }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditBlogEntryFormComponent);
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
