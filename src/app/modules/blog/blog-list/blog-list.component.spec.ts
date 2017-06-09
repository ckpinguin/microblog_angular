import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { BlogListComponent } from './blog-list.component';
import { BlogItemComponent } from '../blog-item/blog-item.component';
import { BlogService } from '../blog.service';

describe('BlogListComponent', () => {
    let component: BlogListComponent;
    let fixture: ComponentFixture <BlogListComponent>;
    let blogService: BlogService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                Router,
                ActivatedRoute,
                BlogService
            ],
            imports: [
                FormsModule,
                RouterTestingModule.withRoutes([])
            ],
            declarations: [ BlogListComponent, BlogItemComponent ]
        }).compileComponents();
    }));

    beforeEach(inject([ BlogService ], (service: BlogService) => {
        blogService = service;
    }));
    beforeEach(inject([ Router ], (router: Router) => {
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
