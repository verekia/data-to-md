const yamlToMarkdown = require('./index')

const str = `
- h1: My Current Inventory
- h2: Technology
- table:
  cols:
    - Brand
    - Model
    - Price
  rows:
    -
      - Apple
      - Macbook Air
      - 500€
    -
      - LG
      - Nexus 5X
      - 400€
- p: '**Note**: Got the Mac half-price'
- h2: TV Shows
- ul:
  - South Park
  - Kaamelott
  - New Girl
`

console.log(yamlToMarkdown(str))
