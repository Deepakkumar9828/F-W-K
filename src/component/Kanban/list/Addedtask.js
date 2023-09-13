import Tasklist from './Tasklist'
import { useState } from 'react'
function Addedtask(props) {
    const [show, setshow] = useState(false)
    const [text, settext] = useState('')
    function finaldata(n, m) {
        return props.changeitem(n, m)
    }
    function addeditem() {
        setshow(false)
        if (text === '') {
            return
        } else {
            return props.newitems(props.name, text)
        }
    }
    return (
        <>
            <div id="main" key={props.id}>
                <div id="todo">
                    <p style={{
                        marginTop: '0px', fontFamily: 'Gugi', fontSize: '140%', marginBottom: '0px'
                    }}>{props.name}</p>
                    <div>
                        <button className="hidebtn" >Archeived</button>
                        <button className="hidebtn" onClick={() => props.removelist(props.name)}>Delete</button>
                    </div>
                </div>
                <div id='datalist'>
                    {props.lists.map((lis) => {
                        return <Tasklist deletelist={(n) => props.removeitem(n)} key={lis} changetask={(n, m) => finaldata(n, m)} list={lis} />
                    })}
                    {show && <div style={{ marginTop: '10px' }}>
                        <textarea onChange={(e) => settext(e.target.value)} name="" id="" cols="20" rows="2"></textarea><br />
                        <button onClick={() => addeditem()}>Add</button>
                    </div>}
                    <div>
                        <p className='newitem' onClick={() => setshow(prev => !prev)}>+New Item</p>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Addedtask