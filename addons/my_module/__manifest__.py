{
    "name" : "My Module",
    "version" : "1.0",
    "author" : "Phay Kyaw Than",
    "license" : "LGPL-3",
    "depends" : ['base','sale'],
    'data' : [
        'views/res_partner_inherit_form.xml',
        'views/sale_order_inherit_view_form.xml'
    ],
    "assets" : {
        "web.assets_backend" : [
            'my_module/static/src/components/**/*'
        ]
    }
}