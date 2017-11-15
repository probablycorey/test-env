const fs = require('fs')
process.chdir(__dirname)

const appConfig = JSON.parse(fs.readFileSync('../app.json'))
if (fs.existsSync('../app.local.json')) {
  const localConfig = JSON.parse(fs.readFileSync('../app.local.json'))
  Object.assign(appConfig, localConfig)
}

const env = []
for (key in appConfig.env) {
  const value = appConfig.env[key].value
  env.push(`${key}='${value}'`)
}

process.stdout.write(env.join('\n'))
