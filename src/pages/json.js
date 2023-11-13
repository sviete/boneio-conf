import useSWR from 'swr'
import { JSONEditor } from "../lib";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Json() {
  
  const { data, error, isLoading } = useSWR('/api/boneio-yaml', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading yaml...</div>
  
  console.log("---------frontend recived this data------------------")
  console.log(JSON.stringify(JSON.parse(data), null, 2))
  console.log("---------frontend recived this data------------------")


  // constructor(){
  //   this.onJsonChange = this.onJsonChange.bind(this);
  // }
  
  function onJsonChange(key, value, parent, data){
    console.log(key, value, parent, data);
  }

  return (
        <>

        <JSONEditor
          data={JSON.parse(data)}
          collapsible
          view="dual"
          onChange={onJsonChange}
        />;

        </>

       )
}

