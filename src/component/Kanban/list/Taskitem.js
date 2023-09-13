import Addedtask from './Addedtask'
function Taskitem(props) {
    const propsdata = props.data
    function finaldata(n, m) {
        return props.changenewitem(n, m)
    }
    return (
        <>
            {propsdata.map((item) => {
                return <Addedtask removeitem={(n) => props.deletfromitem(n)} removelist={(n) => props.deletelist(n)} key={item.id} changeitem={(n, m) => finaldata(n, m)} newitems={(n, m) => props.addnewitem(n, m)} items={item} name={item.name} id={item.id} lists={item.list} />
            })}

        </>
    )
}
export default Taskitem
