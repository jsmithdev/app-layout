import { api, LightningElement } from 'lwc';

export default class Drawer extends LightningElement {

    @api items = []

    get links(){
        
        return this.items.map((name, i) => ({
            name,
            label: name,
            key: `side${i}`
        }))
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