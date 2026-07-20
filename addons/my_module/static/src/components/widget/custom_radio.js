import {registry} from "@web/core/registry";
import {Component} from "@odoo/owl";
import {standardFieldProps} from "@web/views/fields/standard_field_props";


export class CustomRadioComponent extends Component {
    static template = 'my_module.custom_radio_template'
    static props = {...standardFieldProps}

    get value() {

    }
}


export const customRadio = {
    component : CustomRadioComponent,
    supportedTypes : ['selection']
}

registry.category('fields').add('custom_radio',customRadio)