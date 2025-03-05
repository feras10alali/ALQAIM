/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4121804497")

  // update collection data
  unmarshal({
    "name": "themes"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4121804497")

  // update collection data
  unmarshal({
    "name": "colors"
  }, collection)

  return app.save(collection)
})
