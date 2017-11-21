import { Component, OnInit } from '@angular/core';
import { HttpClient } 	from '@angular/common/http';
import { markdown } 	from 'markdown';


@Component({
	template: `
		<div class="documentation-container">
			{{template}}
		</div>
	`
})
export class DocumentationContainerComponent implements OnInit {
	public template: HTMLElement;

	constructor(private httpClient : HttpClient) { }

	public ngOnInit() {
		this.turnMardownIntoTemplate('../../../assets/documentation/basic-documentation.md');
	}

	private turnMardownIntoTemplate(mdFileLocation: string) {
		this.httpClient.get(mdFileLocation, {responseType : 'text' })
			.subscribe(function(data) {
				this.template = markdown.toHTML(data);
			}.bind(this)
		);
	}
}