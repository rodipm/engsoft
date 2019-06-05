from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
# imports do projeto
from escola.models.aula_model import AulaModel

# defines user schema
class AulaSchema(ModelSchema):
    class Meta:
        model = AulaModel