import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import {BlogListComponent} from './blog-list.component';


describe('BlogListComponent', () => {
    let component: BlogListComponent;
    let fixture: ComponentFixture < BlogListComponent >;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [BlogListComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
