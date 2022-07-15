import { api, LightningElement } from 'lwc';

import MenuIcon from "./menuIcon/menuIcon";
import Drawer from "./drawer/drawer";

customElements.define('menu-icon', MenuIcon.CustomElementConstructor);
customElements.define('menu-drawer', Drawer.CustomElementConstructor);

export default class AppLayout extends LightningElement {

    @api header = 'The Heading';
    @api subheader = 'A Subheading...';
    @api sideItems = []

    renderedCallback(){
        this.template.querySelector('.menu')
            .appendChild(document.createElement('menu-icon'))
        this.template.querySelector('.drawer')
            .appendChild(document.createElement('menu-drawer'))
        this.template.querySelector('menu-drawer')
            .items = this.sideItems;
    }

    toggleDrawer(){
        
        const el = this.template.querySelector('.content')

        this.isDrawer = this.isDrawer ? false : true;

        if(this.isDrawer){
            el.classList.remove('close')
            el.classList.add('open');
        }
        else {
            el.classList.remove('open');
            el.classList.add('close')
        }
    }

    closeDrawer(){
        this.template.querySelector('menu-icon').toggle();
        this.toggleDrawer();
    }

}