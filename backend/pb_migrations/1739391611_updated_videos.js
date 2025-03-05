/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("videos123")

  // remove field
  collection.fields.removeById("url")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file2093472300",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "video/mp4",
      "video/x-matroska",
      "video/quicktime",
      "video/webm",
      "video/mpeg"
    ],
    "name": "video",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("videos123")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "url",
    "max": 0,
    "min": 0,
    "name": "url",
    "pattern": "^https?://",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("file2093472300")

  return app.save(collection)
})
