const fs = require('fs-extra')
const yaml = require('js-yaml')

try {
  const doc = yaml.safeLoad(fs.readFileSync('data-test.yaml', 'utf8'));
  // console.log(doc);
  let output = ''
  doc.forEach((entry) => {
    if (entry.hasOwnProperty('h1')) {
      output += `\n# ${entry.h1}\n\n`
    }
    if (entry.hasOwnProperty('table')) {
      output += entry.cols.reduce((a, b) =>
        `${a} | ${b}`
      )
      output += '\n'
      entry.cols.forEach((col, i, arr) => {
        if (i !== 0 && i !== arr.length) {
          output += ' | '
        }
        output += col.replace(/./g, '-')
      })
      output += entry.rows.reduce((a, b) =>
        `${a}\n${b.reduce((c, d) =>
          `${c} | ${d}`
        )}`
      , '')
      output += '\n'
    }
  })
  console.log(output)
} catch (e) {
  console.log(e)
}
