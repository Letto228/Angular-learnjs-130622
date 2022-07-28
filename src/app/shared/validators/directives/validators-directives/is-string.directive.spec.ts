import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { IsStringDirective } from './is-string.directive';
import { ValidatorsDirectivesModule } from './validators-directives.module';

describe('IsStringDirective', () => {
	const directive = new IsStringDirective();

	it('Форма без числа', () => {
		const error = directive.validate(new FormControl('String'));

		expect(error).toBeNull();
	});

	it('Форма с числом', () => {
		const error = directive.validate(new FormControl('123'));

		expect(error).toEqual({ isString: 'Input text' });
	});
});

@Component({
	selector: 'app-test',
	template: `<input #input [ngModel]="search" appIsString />`,
})
class TestComponent {
	search = '123';

	@ViewChild('input', { static: true, read: NgModel }) model!: NgModel;
}

describe('IsStringValidator TestBed', () => {
	let fixture: ComponentFixture<TestComponent>;
	let component: TestComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestComponent],
			imports: [ValidatorsDirectivesModule, FormsModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
	});

	it('Ошибка при старте', fakeAsync(() => {
		fixture.detectChanges();

		tick(100);

		const error = component.model.errors;

		expect(error).toEqual({ isString: 'Input text' });
	}));
});
