### What do we mean with "create new page":

A new page, a new url, a new path.

We will use the "path" here in this explanation.

### How to create:

To create a new page we have to move on the following flow:

1. Add the needed path in the [routes.md](routes.md) file.
2. Create the new file with the same path.
3. Add the path object in the [links](../src/data/shared/links.json) file.
4. Add the path object in the [breadcrumbMap](../src/data/shared/breadcrumbMap.json) file.

### Example

We have the following new path [http://localhost:3000/researchCenter/projects/researchPreparation/reserveTitle](http://localhost:3000/researchCenter/projects/researchPreparation/reserveTitle)

Then, we will add it in the [routes.md](routes.md) as:

- [/researchCenter/projects/researchPreparation/reserveTitle](/researchCenter/projects/researchPreparation/reserveTitle)

Then, Create its new file in the pages folder as:

- [pages/researchCenter/projects/researchPreparation/reserveTitle.jsx](pages/researchCenter/projects/researchPreparation/reserveTitle.jsx)

Then, add the following object in the [links](src/data/shared/links.json) file:

```json
    {
      "id": "2.2.1.1",
      "title": "احجز عنوانك",
      "type": "leaf",
      "href": "/researchCenter/projects/researchPreparation/reserveTitle"
    },
```

Then, add the following object in the [breadcrumbMap](src/data/shared/breadcrumbMap.json) file:

```json
      "/researchCenter/projects/researchPreparation/reserveTitle": {
    "id": "2.2.1.1",
    "title": "احجز عنوانك",
    "type": "leaf"
  },
```
