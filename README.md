# Todo List
TodoList est une application responsive qui permet d'ajouter des tâches, de les modifier, les supprimer, et de cocher et barrer celles qui ont déjà été effectuées.

## Serveur API Restful & Client en React

### Serveur
#### Install
```sh
$ npm install
$ npm start
```

#### API

| URL | req | res |
|-----|-----|-----|
| `GET /api/tasks` | ∅ | `200 Ok [ {"title": "Shopping", "doneyet": false}, ... ]` |
| `POST /api/tasks` | `{"title": "Shopping"}` | `201 Created {"title": "Shopping", "doneyet": false}` |
| `PUT /api/tasks/1234` | `{"doneyet": true}` | `200 Ok {"title": "Shopping", "doneyet": true}` |
| `DELETE /api/tasks/1234` | ∅ | `204 No Content` |

### Client
#### Install
```sh
$ npm install
$ npm start
```

![alt text](/public/images/maTodoList.png)

