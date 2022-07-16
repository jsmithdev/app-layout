import { api, LightningElement } from 'lwc';

export default class Drawer extends LightningElement {

    @api header = 'Menu'
    @api items = []

    get links(){
        
        return this.items.map((name, i) => ({
            name,
            label: name,
            key: `side${i}`
        }))
    }
    get version() {
		try {
			// eslint-disable-next-line no-undef
			return `v${__VERSION__}`;
		} catch (e) {
			return false;
		}
	}

    /**
     * highlight first in list on init
     */
    renderedCallback(){
        if(!this._init) this.highlightItem(this.template.querySelector('div.item'));
        this._init = true;
    }

    navigate(event){
        
        const { target } = event;

        this.highlightItem(target)

        const { name } = target.dataset;

        this.dispatchEvent(new CustomEvent('navigate', {
            composed: true,
            bubbles: true,
            detail: {
                name,
            }
        }))
    }

    highlightItem(el){
        this.template.querySelectorAll('div.item').forEach(el => el.classList.remove('active'));
        el.classList.add('active');
    }
}