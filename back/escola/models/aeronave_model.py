from dao import db, Base


class AeronaveModel(Base):
    __tablename__ = 'aeronaves'
    identificacao = db.Column(db.String(50), primary_key=True)
    modelo = db.Column(db.String(50), unique=False, nullable=False)
    status = db.Column(db.String(20), unique=False, nullable=False)

    def __init__(self, identificacao, modelo, status):
        self.identificacao = identificacao
        self.modelo = modelo
        self.status = status

    def add(self):
        db.session.add(self)
        db.session.commit()


    @classmethod
    def find_by_identificacao(cls, identificacao):
        return cls.query.filter_by(identificacao=identificacao).first()

    @classmethod
    def find_by_modelo(cls, modelo):
        return cls.query.filter_by(modelo=modelo).first()

    @classmethod
    def find_by_CPF(cls, status):
        return cls.query.filter_by(status=status).first()

    @classmethod
    def list(cls):
        return cls.query.all()

    def remove(self):
        db.session.delete(self)
        db.session.commit()
