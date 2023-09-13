import './header.css'
import { useState } from 'react'
function Header(props) {
    const [name, setname] = useState('')
    const [show, setshow] = useState(false)
    function addnewlist() {
        if (name === '') {
            return
        } else {
            return props.addtodata(name)
        }
    }
    return (
        <>
            <div className='header'>
                <div id="head">
                    <h3 style={{ fontfamily: 'Gugi' }}><span style={{ color: 'rgb(97, 85, 85)', cursor: 'pointer' }}>Kanban Board </span>: PROJECT
                        TRACKER</h3>
                    <h5 className='addnew' onClick={() => setshow(true)}>Add new List</h5>
                </div>
                {show && <div className="hideinp">
                    <div>
                        <div>
                            <p style={{ marginTop: '0px' }}>Create new list</p>
                            <input type="text" onChange={(e) => setname(e.target.value)} placeholder="Enter your List name" style={{ width: '293px' }} /><br />
                            <button className="hidebtn" onClick={() => addnewlist()}>Save list</button>
                            <button className="hidebtn" onClick={() => setshow(false)}>Close</button>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}
export default Header