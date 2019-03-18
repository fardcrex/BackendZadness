FORMAT: 1A
HOST: http://polls.apiblueprint.org/

# Zadness

API RESTful de grandes científicos de la historia por Jair Conislla

## Questions Collection [/questions]

### List All Questions [GET]

+ Response 200 (application/json)

        {
    "data": [
        {
            "_id": "5c8bd428efe4ce47d0acebcb",
            "name": "Christiaan Huygens",
            "country": {
                "_id": "5c89c984ecbd574e71f7f9e4",
                "name": "Netherlands"
            },
            "imagen": "/assets/5c840c6d0ca7a20b7c240b98.jpeg",
            "url": "https://es.wikipedia.org/wiki/Christiaan_Huygens",
            "descripcion": "Fue [...] a Royal Society.",
            "__v": 0,
            "AñoFallecimiento": 1695,
            "AñoNacimiento": 1629
        },
        [...],
        {
            "_id": "5c8bd428efe4ce47d0acebc0",
            "name": "Peter Debye",
            "country": {
                "_id": "5c89c984ecbd574e71f7fa37",
                "name": "United States"
            },
            "imagen": "/assets/5c8404970ca7a20b7c240b8d.jpg",
            "url": "https://es.wikipedia.org/wiki/Peter_Debye",
            "descripcion": "Petrus (Peter) Josephus [...] al 
            conocimiento de las estructuras
            moleculares.",
            "__v": 0,
            "AñoFallecimiento": 1695,
            "AñoNacimiento": 1629
        }
    ]
}

### Create a New Question [POST]

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ Request (application/json)

        {
    "data": {        
        "name": "New Cientifico",
        "country": "5c89c984ecbd574e71f7f9e4",
        "imagen": "/assets/imagenDefault.jpg",
        "url": "https://es.wikipedia.org/wiki/New_Cientifico",
        "descripcion": "Nueva descripcion",
        "__v": 0,
        "AñoFallecimiento": 2000,
        "AñoNacimiento": 3000
    }
}

+ Response 201 (application/json)

    + Headers

            Location: /questions/2

    + Body

                name: Nombre del cientifico. REQUIRE UNIQUE

                country: ID del país de procedencia ver países REQUIRE

                imagen: URL de la imagen del cientifico OPCIONAL

                url: URL de la wiki

                descripcion: Una descripcion sobre su vida OPCIONAL

                AñoFallecimiento: Año de fallecimiento OPCIONAL

                AñoNacimiento: Año de nacimiento OPCIONAL
