import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';

import { ShowErrorComponent } from './show-error.component';

describe('ShowErrorComponent', () => {
    let component: ShowErrorComponent;
    let fixture: ComponentFixture<ShowErrorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [NgForm], // injected
            declarations: [ShowErrorComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShowErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
