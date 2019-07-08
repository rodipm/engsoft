from flask_restful import Resource, reqparse, abort
from escola.models.aeronave_model import AeronaveModel
from escola.schemas.aeronave_schema import AeronaveSchema



class AeronaveResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('identificacao', type=str, required=False)
    parser.add_argument('modelo', type=str, required=False)
    parser.add_argument('status', type=str, required=False)

    def put(self):
        try:
            args = self.parser.parse_args()
            json = ''
            print("args", args)
            
            aeronave = None

            aeronave = AeronaveModel.find_by_identificacao(args['identificacao'])

            print("aeronave:", aeronave)

            identificacao=aeronave.identificacao
            modelo=aeronave.modelo
            status = args['status']

            aeronave.remove()

            aeronave = AeronaveModel(
                identificacao=identificacao, modelo=modelo, status=status)
            aeronave.add()

            if aeronave:
                schema = AeronaveSchema()
                json = schema.dump(aeronave).data
            else:
                return {'message': f"Aeronave {args['identificacao']} not found"}, 404

        except Exception as e:
            print(e)
            return {'message': f"Request Error (GET)"}, 500

        return json, 200

        

    def get(self):
        
       
        try:

            args = self.parser.parse_args()
            json = ''
            print(args)
            
            aeronave = None
            
            if not args:
                return {'message': 'Request Error (GET): No args found'}

            if args['identificacao']:
                aeronave = AeronaveModel.find_by_identificacao(args['identificacao'])
            elif args['modelo']:
                aeronave = AeronaveModel.find_by_modelo(args['modelo'])
            elif args['status']:
                aeronave = AeronaveModel.find_by_status(args['status'])
                

            if aeronave:
                schema = AeronaveSchema()
                json = schema.dump(aeronave).data

            else:
                return {'message': f"Aeronave {args['identificacao']} not found"}, 404

        except Exception as e:
            print(e)
            return {'message': f"Request Error (GET)"}, 500

        return json, 200

    def post(self):
        try:
            args = self.parser.parse_args()
            print(args)

            if not (args['identificacao'] and args['modelo'] and args['status']):
                return {'message': "Request Error (POST): No args found"}, 400

            if AeronaveModel.find_by_identificacao(args['identificacao']):
                return {'message': f"Aeronave com identificação: {args['identificacao']} já está cadastrada no sistema."}, 400
            else:
                aeronave = AeronaveModel(
                    identificacao=args['identificacao'], modelo=args['modelo'], status=args['status'])
                aeronave.add()

                aeronave = AeronaveModel.find_by_identificacao(args['identificacao'])

                schema = AeronaveSchema()
                json = schema.dump(aeronave).data

                return json, 201

        except Exception as e:
            print(e)
            return {"message": "Database error"}, 501


class AeronavesResource(Resource):
    def get(self):
        json = ''
        try:
            aeronaves = AeronaveModel.list()

            schema = AeronaveSchema(many=True)
            json = schema.dump(aeronaves).data

        except Exception as e:
            print(e)
            return {"message": "Something went wrong while listing aeronaves"}, 500

        return json, 200