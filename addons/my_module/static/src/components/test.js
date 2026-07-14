import {Component} from "@odoo/owl";
import {registry} from "@web/core/registry";

export class TestModule extends Component {
    static template = "my_module.test"
}

registry.category('view_widgets').add('test_widget',{component : TestModule});

