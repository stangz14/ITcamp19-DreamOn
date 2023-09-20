migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d2ephickn5ii91a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1fumi2eo",
    "name": "Description",
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

  // remove
  collection.schema.removeField("1fumi2eo")

  return dao.saveCollection(collection)
})
