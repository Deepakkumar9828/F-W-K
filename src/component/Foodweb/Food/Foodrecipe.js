import { useDispatch } from 'react-redux'
import { Slicdata } from '../../../../src/store/Store'
function Foodrecipe(props) {
    const dispatch = useDispatch()
    function addtorecipe(data) {
        dispatch(Slicdata.addrecipe(data))
    }
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img style={{ height: '180px', width: '100%' }} src={props.data.recipe.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.data.recipe.label}</h5>
                    <div style={{ lineHeight: '0.3em' }}>
                        <p className="card-text">Type: {props.data.recipe.cuisineType}</p>
                        <p>Caleries: {props.data.recipe.calories.toFixed(0)}</p>
                        <p>Diet-lavel: {props.data.recipe.dietLabels}</p>
                        <p>Weight: {props.data.recipe.totalWeight.toFixed(0)}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <a href={props.data.recipe.url} target='about_blank' className="btn btn-primary">See Somewhere</a>
                        <button className="btn btn-primary" type="button" onClick={() => addtorecipe(props.data.recipe.ingredientLines
                        )}>See Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Foodrecipe