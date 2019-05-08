from flask_restful import Resource, reqparse, abort
from datetime import datetime
# Imports do projeto
from escola.models.aula_model import AulaModel
from escola.schemas.aula_schema import AulaSchema
from escola.models.aluno_model import AlunoModel
# defines aula backend resources
class AulaResource(Resource):
    # create parser
    parser = reqparse.RequestParser()
    parser.add_argument('data', type=lambda x: datetime.strptime(x,'%Y-%m-%dT%H:%M:%S'), required=False)
    parser.add_argument('aluno_id', type=int, required=False)
    parser.add_argument('duracao', type=int, required=False)

    def get(self):
        # parse args
        args = self.parser.parse_args()
        json = '' 

        # tenta obter uma entrada no banco de dados com o CPF do aula
        try:
            if not args:
                return {'message', 'Request Error (GET): No args found'}

            aula = AulaModel.find_by_data_aluno_id(aluno_id=args['aluno_id'], data=args['data'])

            # aula encontrado
            if aula:
                schema = AulaSchema()
                json = schema.dump(aula).data # transforma em JSON baseado no Schema adotado
            # aula nao encontrado
            else:
                return {'message': f"Não foram encontradas aulas marcadas com essas caracteristicas."}, 404

        except Exception as e:
            print(e)
            return {'message': f"Request Error (GET)"}, 500

        return json, 200
    
    def post(self):
        try:
            # parse args
            args = self.parser.parse_args()

            # no args
            if not args:
                return {'message': "Request Error (POST): No args found"}, 400
            
            # verifica se o aula ja existe
            if AulaModel.find_by_data_aluno_id(data=args['data'], aluno_id=args['aluno_id']):
                return {'message': f"Aula para {args['aluno_id']} em {args['data']} já está cadastrado no sistema."}, 400
            else:
                # create new aula
                aula = AulaModel(data=args['data'], aluno_id=args['aluno_id'], duracao=args['duracao'])
                # add aulaf
                aula.add()

                # retrieve created aula
                aula = AulaModel.find_by_data_aluno_id(data=args['data'], aluno_id=args['aluno_id'])

                # transforma em um JSON baseado no Schema associado
                schema = AulaSchema()
                json = schema.dump(aula).data

            return json, 201

        except Exception as e:
            print(e)
            return {"message":f"Database error {e}"}, 500
        return json, 201

# Definicao para obter todos os aulas
class AulasResource(Resource):
    def get(self):
        json = ''
        aulas = [] 
        try:
            # caso nao tenha argumentos no request lista todas as aulas
            aulas = AulaModel.list()
            schema = AulaSchema(many=True)
            json = schema.dump(aulas).data
        except Exception as e:
            print(e)
            return {"message":"Something went wrong while listing aulas"}, 500
        return json, 201

# Definicao para obter o total de horas de voo
class HorasAulaResource(Resource):
    # create parser
    parser = reqparse.RequestParser()
    parser.add_argument('aluno_id', type=int, required=False)

    def get(self):
        args = self.parser.parse_args()

        try:
            if not args['aluno_id']:
                return {'message': "Request Error (GET): No 'user_id' arg found"}

            # caso nao tenha argumentos no request lista todas as aulas
            horas_voo = AulaModel.get_horas_voo(args['aluno_id'])
            return {'horas_voo': horas_voo}

        except Exception as e:
            print(e)
            return {"message":"Something went wrong while getting horas_voo"}, 500
        return json, 201