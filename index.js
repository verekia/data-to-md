const yaml = require('js-yaml')

function yamlToMarkdown(yamlString) {
  const doc = yaml.safeLoad(yamlString);
  let output = ''
  doc.forEach((entry) => {
    output += '\n'
    if (entry.hasOwnProperty('h1')) {
      output += `# ${entry.h1}\n`
    }
    if (entry.hasOwnProperty('h2')) {
      output += `## ${entry.h2}\n`
    }
    if (entry.hasOwnProperty('h3')) {
      output += `## ${entry.h3}\n`
    }
    if (entry.hasOwnProperty('h4')) {
      output += `## ${entry.h4}\n`
    }
    if (entry.hasOwnProperty('p')) {
      output += `${entry.p}\n`
    }
    if (entry.hasOwnProperty('ul')) {
      entry.ul.forEach((li) => {
        output += `- ${li}\n`
      })
      output += '\n'
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
  return output
}

module.exports = yamlToMarkdown
