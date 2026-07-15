import {registry} from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
import {Component,useState} from "@odoo/owl";


export class TextColor extends Component {
    static template = 'my_module.text_color'
    static props = {...standardFieldProps};

    get noteText() {
        return this.props.record.data.note_text
    }
}

export const textColor = {
    component : TextColor,
    supportedTypes : ['char'],
};

registry.category("fields").add("textColorWidget",textColor)