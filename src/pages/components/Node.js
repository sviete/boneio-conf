import styles from './Node.module.css' 
import Link from 'next/link'

export default function MainNode({data}) {

    console.log(JSON.stringify(data));
    let key = Object.keys(data); 
    let value = data[key]; 
    let isNested = Object.keys(data).some(function(key) {
        return data[key] && typeof data[key] === 'object';
    });
    console.log(isNested)

return (
    <>
    <div className={styles.node}>
    <Link href={{ pathname: "node", query: { object: JSON.stringify(value) } }} ><div className={styles.nodeTitle}>{key}</div></Link>
    <div className={styles.nodeBody}>{JSON.stringify(value)}</div>
    </div>
    </>
)
}