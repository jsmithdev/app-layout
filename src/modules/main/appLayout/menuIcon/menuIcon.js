import { api, LightningElement } from 'lwc';

export default class MenuIcon extends LightningElement {

    @api
    toggle(){
        this.template.querySelector('button')
            .classList.toggle('opened');
        this.setAttribute('aria-expanded', this.classList.contains('opened'))
    }
}