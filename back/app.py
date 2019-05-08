from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api

# project imports
from escola.resources.aluno_resource import AlunoResource, AlunosResource, HorasVooAlunoResource
from escola.resources.aula_resource import AulaResource, AulasResource

# create flask app
app = Flask(__name__)

# configure db
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///banco_projeto_engsoft.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['SQLALCHEMY_ECHO'] = True
app.secret_key = '32871u3i1jn321p9hpasxjn;oacnasp9*Y#(@*!H#UI#@N!)(#21uieb21i3jh21387912h3pN#@&H!*&!@H#)!&@*3h2018'

# create api
api = Api(app)

# setup CORS (o.w. will receive an error)
CORS(app)

# create tables
@app.before_first_request
def create_tables():
    db.create_all()

# endpoints declarations
api.add_resource(AlunoResource, '/aluno')
api.add_resource(AlunosResource, '/alunos')
api.add_resource(HorasVooAlunoResource, '/aluno/horas_voo')
api.add_resource(AulaResource, '/aula')
api.add_resource(AulasResource, '/aulas')

# main
if __name__ == '__main__':
    # init db
    from dao import db
    db.init_app(app)

    # run app
    app.run(debug=True)