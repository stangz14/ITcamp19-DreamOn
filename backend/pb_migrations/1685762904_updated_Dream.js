migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d2ephickn5ii91a")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "deoum36l",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iudkzm4z",
    "name": "yourdream",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d2ephickn5ii91a")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
