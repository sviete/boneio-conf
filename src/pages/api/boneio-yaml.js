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
      console.log('--------packages-----------')
      console.log('packagee: ' + f)
      console.log('-------------------')
      console.log(JSON.stringify(yaml["packages"][f]) + ' : ' + JSON.stringify(yaml2, null, 2))
      console.log('-------------------')
    } 
  }
}

console.log('----------OUTPUT JSON----------')
console.log(JSON.stringify(yaml, null, 2))
console.log('----------OUTPUT JSON----------')
fs.writeFileSync("./esphome_config/ais_new.yaml", YAML.stringify(yaml));



export default async function handler(req, res) {
  res.status(200).json(JSON.stringify(yaml))
}
