import { api, LightningElement } from 'lwc';

import MenuIcon from "./menuIcon/menuIcon";
import Drawer from "./drawer/drawer";

customElements.define('menu-icon', MenuIcon.CustomElementConstructor);
customElements.define('menu-drawer', Drawer.CustomElementConstructor);

export default class AppLayout extends LightningElement {

    @api header = 'The Heading';
    @api subheader = 'A Subheading...';
    @api sideItems = []

    get isLarge(){
        return window.innerWidth > 1200;
    }

    get content(){
        return this.template.querySelector('.content')
    }

    renderedCallback(){
        this.template.querySelector('.menu')
            .appendChild(document.createElement('menu-icon'))
        this.template.querySelector('.drawer')
            .appendChild(document.createElement('menu-drawer'))
        this.template.querySelector('menu-drawer')
            .items = this.sideItems;
    }

    toggleDrawer(){

        this.isDrawer = this.isDrawer ? false : true;

        if(this.isDrawer){
            this.content.classList.remove('close')
            this.content.classList.add('open');
        }
        else {
            this.content.classList.remove('open');
            this.content.classList.add('close')
        }
    }

    closeDrawer(){
        if(!this.isLarge) this.template.querySelector('menu-icon').toggle();
        this.toggleDrawer();
    }

    connectedCallback(){
        this.addEventListeners();
    }

    addEventListeners(){
        window.addEventListener('resize', () => this.resize())
    }

    resize(){
        
        if(this.wasLarge === this.isLarge) return;

        if(this.isLarge){
            this.isDrawer = true;
            this.content.classList.remove('close');
            this.content.classList.add('open')
            this.template.querySelector('menu-icon').toggle(false);
        }
        else {
            this.isDrawer = false;
            this.content.classList.remove('open');
            this.content.classList.add('close')
            this.template.querySelector('menu-icon').toggle(false);
        }
        this.wasLarge = this.isLarge;
    }
}