from flask_restful import Resource, reqparse, abort
# Imports do projeto
from escola.models.aluno_model import AlunoModel
from escola.schemas.aluno_schema import AlunoSchema

# defines aluno backend resources


class AlunoResource(Resource):
    # create parser
    parser = reqparse.RequestParser()
    parser.add_argument('nome', type=str, required=False)
    parser.add_argument('senha', type=str, required=False)
    parser.add_argument('id', type=int, required=False)
    parser.add_argument('CPF', type=str, required=False)
    parser.add_argument('RG', type=str, required=False)
    parser.add_argument('idade', type=int, required=False)
    parser.add_argument('endereco', type=str, required=False)

    def get(self):
        
       
        # tenta obter uma entrada no banco de dados com o CPF do aluno
        try:

            args = self.parser.parse_args()
            json = ''
            print(args)
            
            aluno = None
            
            if not args:
                return {'message': 'Request Error (GET): No args found'}
            
            # busca por id, nome, CPF, senha  (baseado nos argumentos passados)

            

            if  args['senha'] and args['CPF']:
                if AlunoModel.find_by_cpf_and_senha(args['CPF'],args['senha']):
                    return {'message': 'Credentials Valid'}
                else:
                    raise Exception('Credentials INVALID')
            elif args['id']:
                aluno = AlunoModel.find_by_id(args['id'])
            elif args['CPF']:
                aluno = AlunoModel.find_by_CPF(args['CPF'])
            elif args['nome']:
                aluno = AlunoModel.find_by_nome(args['nome'])
                

            # aluno encontrado
            if aluno:
                schema = AlunoSchema()
                # transforma em JSON baseado no Schema adotado
                json = schema.dump(aluno).data
            # aluno nao encontrado
            else:
                return {'message': f"Aluno {args['nome']} not found"}, 404

        except Exception as e:
            print(e)
            return {'message': f"Request Error (GET)"}, 500

        return json, 200

    def post(self):
        try:
            # parse args
            args = self.parser.parse_args()
            print(args)

            # no args
            if not (args['nome'] and args['senha'] and args['CPF'] and args['RG'] and args['idade'] and args['endereco']):
                return {'message': "Request Error (POST): No args found"}, 400

            # verifica se o aluno ja existe
            if AlunoModel.find_by_CPF(args['CPF']):
                return {'message': f"Aluno com CPF: {args['CPF']} já está cadastrado no sistema."}, 400
            else:
                # create new aluno
                aluno = AlunoModel(
                    nome=args['nome'], senha=args['senha'], CPF=args['CPF'], idade=args['idade'], RG=args['RG'], endereco=args['endereco'])
                # add aluno
                aluno.add()

                # retrieve created aluno
                aluno = AlunoModel.find_by_CPF(args['CPF'])

                # transforma em um JSON baseado no Schema associado
                schema = AlunoSchema()
                json = schema.dump(aluno).data

                return json, 201

        except Exception as e:
            print(e)
            return {"message": "Database error"}, 501

# Definicao para obter todos os alunos


class AlunosResource(Resource):
    def get(self):
        json = ''
        try:
            # lista todos os alunos
            alunos = AlunoModel.list()

            # dump alunos to JSON
            schema = AlunoSchema(many=True)
            json = schema.dump(alunos).data

        except Exception as e:
            print(e)
            return {"message": "Something went wrong while listing alunos"}, 500

        return json, 200

# Definicao para obter o total de horas de voo


class HorasVooAlunoResource(Resource):
    # create parser
    parser = reqparse.RequestParser()
    parser.add_argument('aluno_id', type=int, required=False)
    parser.add_argument('nome', type=str, required=False)

    def post(self):
        args = self.parser.parse_args()
        print(args)
        try:
            if not args['aluno_id']:
                return {'message': "Request Error (GET): No 'user_id' arg found"}

            # caso nao tenha argumentos no request lista todas as aulas
            horas_voo = AlunoModel.get_horas_voo(args['aluno_id'])
            print(horas_voo)
            return {'horas_voo': horas_voo}

        except Exception as e:
            print(e)
            return {"message": "Something went wrong while getting horas_voo"}, 500


