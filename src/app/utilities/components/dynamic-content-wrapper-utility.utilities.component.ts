import { 
	Compiler, 
	Component, 
	ComponentFactoryResolver, 
	ComponentRef, 
	Input, 
	OnChanges,
	OnDestroy, 
	Type, 
	ViewChild, 
	ViewContainerRef, 
	AfterViewInit, 
	AfterContentInit 
} from '@angular/core';

@Component({
	selector: 'dynamic-content-wrapper',
	template: `<div #target></div>`
})
export class DynamicContentWrapperComponent implements AfterViewInit, OnChanges, OnDestroy {
	@ViewChild('target', {read: ViewContainerRef}) wrapper : ViewContainerRef;
	@Input() type : Type<Component>;
	
	public componentReference: ComponentRef<Component>;

	private isViewInitialized: boolean = false;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private compiler: Compiler
	) { }

	private destroySelf() {
		if (this.componentReference) {
			// When the 'Type' input changes, we destroy a previously
			// created component before creating a new one.
			this.componentReference.destroy();
		}
	}

	private updateComponent() {
		
		if (!this.isViewInitialized) {
			return;
		}

		this.destroySelf();

		console.log("doodles");

		if (this.type) {
			const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
			this.wrapper.clear();
			this.componentReference = this.wrapper.createComponent(factory);
		}

	}

	public ngAfterViewInit() {
		this.isViewInitialized = true;
		this.updateComponent();
	}

	public ngOnChanges() {
		this.updateComponent();
	}

	public ngOnDestroy() {
		this.destroySelf();
	}
}