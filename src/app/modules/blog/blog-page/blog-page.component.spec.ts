import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageComponent } from './blog-page.component';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { BlogService } from '../blog.service';
import { BlogEntry } from '../model-interfaces';

describe('BlogPageComponent', () => {
    let component: BlogPageComponent;
    let fixture: ComponentFixture<BlogPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BlogPageComponent ],
            providers: [
                BlogService,
                Router,
                ActivatedRoute
            ]
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
