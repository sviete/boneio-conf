import useSWR from 'swr'
import Node from './node'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  
  const { data, error, isLoading } = useSWR('/api/boneio-yaml', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading yaml...</div>
  // console.log(JSON.stringify(data))

  let nodesList = [];
  for (const property in data) {
    // console.log(`${property}: ${data[property]}`);
    nodesList.push(`{${property}: ${data[property]}}`);
  }
  console.log(nodesList)
  nodesList.map((node) => (
    console.log(node)
  ))
  return (
    <>
        {nodesList.map((node, index) => (
          <Node key={index}>{JSON.stringify(node)}</Node>
        ))}
    </>
  )
}

