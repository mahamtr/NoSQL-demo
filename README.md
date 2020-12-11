# no-sql-demo Maai Ham


## Generate App LB4


`lb4 app'

## Add mongoDB datasource


`lb4 datasource`

Select the MongoDb Option

## Add model


`lb4 model`

Follow the prompt to design model

Model example:
{
  "id": 0,
  "nombre": "string",
  "docente": {},
  "horario": {},
  "cupos": 0,
  "esVirtual": true
}

## Add repository


`lb4 respository`
Select previously added model

## Add controller


`lb4 controller'
Select previously added repository to add CRUD controller

## deploy heroku

--add "heroku-postbuild": "npm run build"
--update  "start": "node .",
--delete  "prestart": "npm run rebuild",

from package.json


