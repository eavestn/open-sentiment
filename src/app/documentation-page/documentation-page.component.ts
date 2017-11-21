import { Component, ComponentFactoryResolver, ViewChild, AfterViewInit } from '@angular/core';
import { DocumentationContainerComponent } from './components/documentation-container.component';
import { DocumentationMarkdownDirective } from './directives/documentation-markdown.directive';


@Component({
	selector: 'documentation-page',
	template: `
		<div> Puppies
			<ng-template documentation-markdown></ng-template>
		</div>
	`
})
export class DocumentationPageComponent implements AfterViewInit {
	@ViewChild(DocumentationMarkdownDirective) documentationMarkdownDirective : DocumentationMarkdownDirective;
	
	constructor(private componentFactoryResolver: ComponentFactoryResolver ) {}

	private loadComponent() {
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(DocumentationContainerComponent);
		let viewContainerRef = this.documentationMarkdownDirective.viewContainerRef;
		viewContainerRef.clear();
		viewContainerRef.createComponent(componentFactory);
	}

	public ngAfterViewInit() {
		this.loadComponent();
	}
}