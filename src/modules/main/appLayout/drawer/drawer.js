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

    navigate(event){
        
        const { name } = event.target.dataset;

        this.dispatchEvent(new CustomEvent('navigate', {
            composed: true,
            bubbles: true,
            detail: {
                name,
            }
        }))
    }

}