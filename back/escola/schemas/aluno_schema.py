from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
# imports do projeto
from escola.models.aluno_model import AlunoModel
from escola.schemas.aula_schema import AulaSchema

# defines user schema
class AlunoSchema(ModelSchema):
    # um aluno pode ter varias aulas associdas a ele
    # o 'fields.Nested' aloca um Schema dentro de outro
    aulas = fields.Nested('AulaSchema', many=True, exclude=['id'])
    class Meta:
        model = AlunoModel