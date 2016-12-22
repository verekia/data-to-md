const fs = require('fs-extra')

const obj = fs.readJsonSync('data-test.json')

obj.document.forEach((node) => {
  if (node.type === 'table') {
    console.log(node.content[0].join(' | '))
  }
})
