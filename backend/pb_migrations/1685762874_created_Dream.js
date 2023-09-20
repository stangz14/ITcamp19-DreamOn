migrate((db) => {
  const collection = new Collection({
    "id": "d2ephickn5ii91a",
    "created": "2023-06-03 03:27:54.839Z",
    "updated": "2023-06-03 03:27:54.839Z",
    "name": "Dream",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "deoum36l",
        "name": "Name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "iudkzm4z",
        "name": "YourDream",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("d2ephickn5ii91a");

  return dao.deleteCollection(collection);
})
