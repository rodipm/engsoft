from dao import db, Base
from escola.models.aula_model import AulaModel

# define a tabela de 'alunos'
class AlunoModel(Base):
    __tablename__ = 'alunos'
    id = db.Column(db.Integer, primary_key=True) # chave primaria unica e auto-incrementada
    nome = db.Column(db.String(200), unique=False, nullable=False)
    horas_voo = db.Column(db.Integer, unique=False)
    CPF = db.Column(db.String(14), unique=True, nullable=False) # 123.456.789.00 len = 14

    def __init__(self, nome, horas_voo, CPF):
        self.nome = nome
        self.horas_voo = horas_voo
        self.CPF = CPF

    # adiciona uma linha na respectiva tabela
    def add(self):
        db.session.add(self)
        db.session.commit()

    # encontra alunos no db pelo nome
    @classmethod
    def find_by_nome(cls, nome):
        return cls.query.filter_by(nome=nome).first()

    # encontra alunos no db pelo CPF
    @classmethod
    def find_by_CPF(cls, CPF):
        return cls.query.filter_by(CPF=CPF).first()

    # lista todos os alunos
    @classmethod
    def list(cls):
        return cls.query.all()

    # remove uma linha da tabela
    def remove(self):
        db.session.delete(self)
        db.session.commit()