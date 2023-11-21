import Node from './components/Node'
import { withRouter } from 'next/router';

function NodePage({ router: { query } }) {
    let configData = JSON.parse(query.object);
    let nodesList = []
    for (let key in configData) {  
        let object = {}
        object[key] = configData[key]
        nodesList.push(object)
    }

    return (
        <>
            {nodesList.map((node, index) => (
            <Node key={index} data={node} />
            ))}
        </>
    )
}

export default withRouter(NodePage);