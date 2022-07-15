import { api, LightningElement } from 'lwc';

import './imports';

export default class View extends LightningElement {

	@api
	get view(){ return this._view }
	set view(view){
		if(!view || this.view === view) return;
		this._view = view;
		if(this._rended) this.swapViews(view);
	}

	get container(){
		return this.template.querySelector('.view-container');
	}

	renderedCallback(){
		if(!this._rended){
			this.swapViews(this.view)
		}
		this._rended = true
	}

	swapViews(name){

		while (this.container.lastElementChild) {
			this.container.removeChild(this.container.lastElementChild);
		}
		this.container.appendChild( 
			document.createElement(`views-${name}`)
		);
	}

	reload(hard) {
		if (hard) {
			const form = document.createElement('form');
			form.method = 'GET';
			form.action = window.location.href;
			document.body.appendChild(form);
			form.submit();
		} else {
			window.location.reload();
		}
	}
}
