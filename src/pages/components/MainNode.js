import styles from './MainNode.module.css' 

export default function MainNode({data}) {

    console.log(JSON.stringify(data))
    let key = Object.keys(data); 
    let value = data["key"] 

return (
    <>
    <div className={styles.node}>
    <div className={styles.nodeTitle}>{key}</div>
    <div className={styles.nodeBody}>{value}</div>
    </div>
    </>
)
}