// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs');
import YAML from 'yaml'

const file = fs.readFileSync('./esphome_config/boneio_config_for_console.yaml', 'utf8')
let yaml = YAML.parse(file)

console.log(yaml)

for (const property in yaml) {
  if (property === "packages") {
    let packages = yaml["packages"]
   for (const f in packages) {
      let file2 = fs.readFileSync('./esphome_config/' + packages[f], 'utf8')
      let yaml2 = YAML.parse(file2)
      yaml["packages"][f] = yaml2
    } 
  }
}

export default async function handler(req, res) {
  res.status(200).json(yaml)
}
