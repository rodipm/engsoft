from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from escola.models.aeronave_model import AeronaveModel

class AeronaveSchema(ModelSchema):
    class Meta:
        model = AeronaveModel