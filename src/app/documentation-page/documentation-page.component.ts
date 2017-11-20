import { Component, OnInit } 	from '@angular/core';
import { HttpClient } 			from '@angular/common/http';
import { markdown } 			from 'markdown';


@Component({
	selector: 'documentation-page',
	templateUrl: './documentation-page.template.html'
})
export class DocumentationPageComponent implements OnInit {
	private template : HTMLElement;

	constructor(private httpClient: HttpClient) {}

	private turnMardownIntoTemplate(mdFileLocation: string) {
		this.httpClient.get(mdFileLocation, {responseType : 'text' })
			.subscribe(function(data) {
				this.template = markdown.toHTML(data);
			}.bind(this)
		);
	}
	
	public ngOnInit() {
		this.turnMardownIntoTemplate('../../assets/documentation/basic-documentation.md');
	}
}