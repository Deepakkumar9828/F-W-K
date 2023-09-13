import { useState } from 'react'
function Tasklist(props) {
    const list = props.list
    const [show, setshow] = useState(false)
    const [text, settext] = useState('')
    function toggleshow() {
        setshow(prev => !prev)
    }

    function changedata() {
        setshow(false)
        if (text === '') {
            return
        } else {
            return props.changetask(list, text)
        }
    }
    return (
        <div >
            <div id='listdata'>
                <div className='list' onClick={() => toggleshow()}>{list}</div>
                {show && <div id="kaninp">
                    <div>
                        <textarea autoFocus className='txt' onChange={(e) => settext(e.target.value)} name="" id="" cols="28" rows="2" placeholder="Change this list"></textarea><br />
                        <button onClick={() => changedata()}>Save</button>
                        <button onClick={() => props.deletelist(list)}>Delete</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}
export default Tasklist