import { useCallback, useState, forwardRef, useImperativeHandle } from 'react';
import './food.css'
import loaderimg from './loading.gif'
import axios from 'axios'
import Foodrecipe from './Foodrecipe'
import { useSelector } from 'react-redux';
const Food = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        log() {
            return Fooditems()
        }
    }));

    const [recipe, setrecipe] = useState([])
    const storedata = useSelector(state => state.item)
    const [loader, setloader] = useState(true)
    const [error, seterror] = useState()
    const Fooditems = useCallback(() => {
        setloader(false)
        try {
            axios.get(`https://api.edamam.com/search?q=${props.food}&app_id=82e453da&app_key=3bb5d1a3b992f408b9003effd74c9c22`).then(res => {
                console.log(res)
                if (res.data.count > 0) {
                    setrecipe(res.data.hits);
                    setloader(true)
                } else {
                    seterror('No Data Found')
                    setloader(true)
                }

            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }, [props.food])
    function ingrediant() {
        return storedata.map((ingredient, i) => (
            <div style={{ lineHeight: '0.5em' }} key={i}>
                <p>{i + 1} : {ingredient}</p>
            </div>
        ));
    }
    function savetolist(list) {
        console.log(list)
    }

    return (
        <>
            <div id='recipe'>
                <center><b>Here</b></center>
                {ingrediant()}
                <button onClick={() => savetolist(storedata)}>Save</button>
            </div>
            {loader ? (<div id='food'>
                {recipe && recipe.map((data, index) =>
                    (<Foodrecipe data={data} key={index} />)
                )}
            </div>) : (
                <img src={loaderimg} alt="pic" />
            )}
            {error && <div>
                <p>{error}</p>
            </div>}
        </>
    )
})
export default Food