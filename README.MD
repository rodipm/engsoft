# Projeto Laboratorio de Engenharia de Software

## Clone Repo
`git clone git@github.com:rodipm/engsoft.git`

## Back-end
1. `cd back`
2. `python -m venv venv` (windows) (seguir o tutorial para outros os e caso nao tenha instalado)
3. `venv\Scripts\activate`
3. `pip install -r requirements.txt`
4. `python app.py`
5. Utilizando a API:
	1. Para testar utiliza-se o POSTMAN
	2. Nesse exemplo existem 4 endpoints: /aluno, /alunos, /aula, /aulas
	3. Os parametros que devem ser passados sao aluno_id e data (no formato AAAA-MM-DDTHH:MM:SS ex.: 2019-04-17T19:38:00)


## Front-end
1. `cd engsoft-app`
2. `npm install` instala as dependências do node_modules (junto com o Bootstrap e o Router)
3. `npm start` inicia a aplicação React em uma porta local
