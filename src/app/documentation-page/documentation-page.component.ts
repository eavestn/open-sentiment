import { Component, Input, OnInit, Type } from '@angular/core';
import { HttpClient } 	from '@angular/common/http';
import { markdown } from 'markdown';
import { DocumentationContainerComponent } from './components/documentation-container.component';

@Component({
	selector: 'documentation-page',
	template: `
		<div>
			<dynamic-content-wrapper [type]="documentationContainerType"></dynamic-content-wrapper>
		</div>
	`
})
export class DocumentationPageComponent implements OnInit {
	public documentationContainerType: any;

	public ngOnInit() {
		this.documentationContainerType = DocumentationContainerComponent;
	}
}