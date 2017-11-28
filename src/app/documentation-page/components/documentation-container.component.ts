import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } 	from '@angular/common/http';
import { markdown } from 'markdown';
import * as showdown from 'showdown';


@Component({
	selector: 'documentation-content-container',
	templateUrl: './documentation-container.template.html',
	styleUrls: ['./documentation-container.styles.less']
})
export class DocumentationContainerComponent {
	@ViewChild('markdownAsHtmlContainer') markdownAsHtmlContainer : ElementRef
	
	constructor(
		private httpClient : HttpClient,
		private domSanitizer: DomSanitizer
	) {
		this.turnMardownIntoTemplate('../../../assets/documentation/basic-documentation.md');
	 }

	private convertMarkdownIntoHtml(rawMarkdown) {
		const converter = new showdown.Converter({ tables: true });
		return converter.makeHtml(rawMarkdown);
	}

	private turnMardownIntoTemplate(mdFileLocation: string) {
		this.httpClient.get(mdFileLocation, {responseType : 'text' })
			.subscribe(function(data) {
				const html = this.convertMarkdownIntoHtml(data);
				this.markdownAsHtmlContainer.nativeElement.innerHTML = html;
			}.bind(this)
		);
	}
}