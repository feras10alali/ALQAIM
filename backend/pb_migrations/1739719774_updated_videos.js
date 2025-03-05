/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("videos123")

  // update collection data
  unmarshal({
    "createRule": "",
    "listRule": "",
    "viewRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("description")

  // add field
  collection.fields.addAt(2, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1843675174",
    "maxSize": 0,
    "name": "description",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("videos123")

  // update collection data
  unmarshal({
    "createRule": null,
    "listRule": null,
    "viewRule": null
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "description",
    "max": 2000,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("editor1843675174")

  return app.save(collection)
})
