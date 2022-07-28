import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('Клик по меню async', (done) => {
		const trigerEvent = new Event('click');
		const debugElement = fixture.debugElement;

		component.menuClick.subscribe((event) => {
			expect(event).toEqual(trigerEvent);

			done();
		});

		debugElement.query(By.css('[integration-id="header-menu-button"]')).triggerEventHandler('click', trigerEvent);
	});

	it('Клик по меню sync', () => {
		const trigerEvent = new Event('click');
		const debugElement = fixture.debugElement;
		const menuClickEmitSpy = spyOn(component.menuClick, 'emit');

		debugElement.query(By.css('[integration-id="header-menu-button"]')).triggerEventHandler('click', trigerEvent);

		expect(menuClickEmitSpy).toHaveBeenCalled();
	});
});
