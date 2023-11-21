import useSWR from 'swr'
import MainNode from './components/MainNode'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  
  const { data, error, isLoading } = useSWR('/api/boneio-yaml', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading yaml...</div>
  
  console.log("---------frontend recived this data------------------")
  console.log(JSON.stringify(JSON.parse(data), null, 2))
  console.log("---------frontend recived this data------------------")

  let configData = JSON.parse(data)
  let nodesList = []
  for (let key in configData) {  
    let object = {}
    object[key] = configData[key]
    nodesList.push(object)
  }

  return (
    <>
        {nodesList.map((node, index) => (
          <MainNode key={index} data={node} />
        ))}
    </>
  )
}

