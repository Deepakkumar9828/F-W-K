import { useState, useRef } from "react";
import Taskitem from './Taskitem'
import './list.css'
import Header from '../header/Header'

function Task() {
    const [data, setdata] = useState([
        { id: 1, name: 'TO DO', year: 2023, list: ['todos 1', 'todos 2', 'todos 3'] },
        { id: 2, name: 'DOING', year: 2023, list: ['doing 1', 'doing 2', 'doing 3'] },
        { id: 3, name: 'DONE', year: 2023, list: ['done 1', 'done 2', 'done 3'] },
        { id: 4, name: 'DEPLOY', year: 2023, list: ['deploy 1', 'deploy 2', 'deploy 3'] },
    ])

    function taskchanged(id, m) {
        const finddata = data.find(f => f.list.includes(id));
        const itemIndex = finddata.list.findIndex(item => item === id);
        const updatedData = data.map(item => {
            if (item.id === finddata.id) {
                return {
                    ...item,
                    list: [
                        ...item.list.slice(0, itemIndex),
                        m,
                        ...item.list.slice(itemIndex + 1),
                    ],
                };
            }
            return item;
        });
        setdata(updatedData);
    }
    function additem(id, m) {
        const datafind = data.find(f => f.name === id)
        if (datafind) {
            const updatedata = data.map(item => {
                if (item.id === datafind.id) {
                    return {
                        ...item,
                        list: [...item.list, m]
                    }
                }
                return item
            })
            setdata(updatedata);
        }
        console.log(id)
    }
    const index = useRef(5)
    function addednewdata(n) {
        index.current++
        console.log(index.current)
        const newdata = [...data, { id: index.current, name: n, list: [] }]
        setdata(newdata)
    }
    function removefromdata(id) {
        setdata((prev) => {
            return [
                ...prev.filter((item) => item.name !== id)
            ]
        })
    }
    function deletedata(id) {
        const finddata = data.find(f => f.list.includes(id));
        const itemIndex = finddata.list.findIndex(item => item === id);
        const updatedData = data.map(item => {
            if (item.id === finddata.id) {
                return {
                    ...item,
                    list: [
                        ...item.list.slice(0, itemIndex),
                        ...item.list.slice(itemIndex + 1),
                    ],
                };
            }
            return item;
        });
        setdata(updatedData);
    }
    return (
        <>
            <Header addtodata={(n) => addednewdata(n)} />
            <div id='full'>
                <Taskitem deletelist={(n) => removefromdata(n)} deletfromitem={(n) => deletedata(n)} addnewitem={(n, m) => additem(n, m)} changenewitem={(n, m) => taskchanged(n, m)} data={data} />
            </div>

        </>

    )
}
export default Task