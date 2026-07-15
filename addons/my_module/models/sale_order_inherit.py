from odoo import api, fields, models

class SaleOrderInherit(models.Model):
    _inherit = "sale.order"
    _description = "Sale Order Inherit"

    note_text = fields.Char(string="Note Text",compute="_compute_note_text")

    @api.depends('state')
    def _compute_note_text(self):
        for rec in self:
            if rec.state == 'draft':
                rec.note_text = 'Quotation'
            elif rec.state == 'sale':
                rec.note_text = 'Confirmed'
            elif rec.state == 'sent':
                rec.note_text = 'Quotation Sent'
            elif rec.state == 'cancel':
                rec.note_text = 'Cancel'
            else:
                rec.note_text = 'Hello Owl'
