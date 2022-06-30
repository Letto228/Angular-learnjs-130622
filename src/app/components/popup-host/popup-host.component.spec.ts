import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupHostComponent } from './popup-host.component';

describe('PopupHostComponent', () => {
	let component: PopupHostComponent;
	let fixture: ComponentFixture<PopupHostComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PopupHostComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PopupHostComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
