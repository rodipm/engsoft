from dao import db, Base

# define a tabela de 'aulas'
class AulaModel(Base):
    __tablename__ = 'aulas'
    id = db.Column(db.Integer, primary_key=True) # chave primaria unica e auto-incrementada
    data = db.Column(db.DateTime, nullable=False) # AAAA-MM-DDTHH:MM:SS
    aluno_id = db.Column(db.Integer, db.ForeignKey('alunos.id'), nullable=False)
    aluno = db.relationship("AlunoModel", backref="aulas")
    duracao = db.Column(db.Integer, nullable=True)


    def __init__(self, aluno_id, data, duracao):
        self.data = data
        self.aluno_id = aluno_id
        self.duracao = duracao

    # adiciona uma linha na respectiva tabela
    def add(self):
        db.session.add(self)
        db.session.commit()

    # encontra aulas alocadas ao aluno
    @classmethod
    def find_by_aluno_id(cls, aluno_id):
        return cls.query.filter_by(aluno_id=aluno_id).first()

    # encontra aulas por data
    @classmethod
    def find_by_data(cls, data):
       return cls.query.filter_by(data=data).all()

    # encontra aula especifica (data e aluno_id)
    @classmethod
    def find_by_data_aluno_id(cls, data, aluno_id):
        return cls.query.filter_by(data=data, aluno_id=aluno_id).first()

    # lista todas as aulas
    @classmethod
    def list(cls):
        return cls.query.all()

    # remove uma linha da tabela
    def remove(self):
        db.session.delete(self)
        db.session.commit()