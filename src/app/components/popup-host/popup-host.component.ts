import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnChanges,
	SimpleChange,
	SimpleChanges,
	TemplateRef,
} from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent implements OnChanges {
	@Input() template: TemplateRef<unknown> | undefined;

	ngOnChanges(changes: SimpleChanges) {
		console.log(changes);
	}
}
