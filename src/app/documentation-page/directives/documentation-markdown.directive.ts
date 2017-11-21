import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[documentation-markdown]'
})
export class DocumentationMarkdownDirective {

	// Injects ViewContainerRef to gain access to the view container 
	// of the element that will host the dynamically added component.
	constructor (public viewContainerRef: ViewContainerRef) { }
}