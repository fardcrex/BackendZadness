FORMAT: 1A
HOST: http://polls.apiblueprint.org/

# Zadness

API RESTful de grandes científicos de la historia por Jair Conislla

## Questions Collection [/questions]

### List All Questions [GET]

+ Response 200 (application/json)

        {
          "data": {
          "_id": "5c8bd428efe4ce47d0acebca",
          "name": "Galileo Galilei",
          "country": {
          "_id": "5c89c984ecbd574e71f7f953",
          "name": "Argentina"
          },
          "imagen": "/assets/5c840baf0ca7a20b7c240b97.jpg",
          "url": "https://es.wikipedia.org/wiki/Galileo_Galilei",
          "descripcion": "Fue un astrónomo, filósofo, ingeniero,6​7​ matemático y físico italiano, relacionado estrechamente con la revolución científica. Eminente hombre del Renacimiento, mostró interés por casi todas las ciencias y artes (música, literatura, pintura). Sus logros incluyen la mejora del telescopio, gran variedad de observaciones astronómicas, la primera ley del movimiento y un apoyo determinante a la «Revolución de Copérnico». Ha sido considerado como el «padre de la astronomía moderna», el «padre de la física moderna»8​ y el «padre de la ciencia».",
          "__v": 0
          }
        }

### Create a New Question [POST]

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ Request (application/json)

        {
            "question": "Favourite programming language?",
            "choices": [
                "Swift",
                "Python",
                "Objective-C",
                "Ruby"
            ]
        }

+ Response 201 (application/json)

    + Headers

            Location: /questions/2

    + Body

            {
                "question": "Favourite programming language?",
                "published_at": "2015-08-05T08:40:51.620Z",
                "choices": [
                    {
                        "choice": "Swift",
                        "votes": 0
                    }, {
                        "choice": "Python",
                        "votes": 0
                    }, {
                        "choice": "Objective-C",
                        "votes": 0
                    }, {
                        "choice": "Ruby",
                        "votes": 0
                    }
                ]
            }
