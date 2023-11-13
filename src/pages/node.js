
export default function Node(value) {

return (
    <>
    <p>{JSON.parse(value.children)}</p>
    </>
)
}