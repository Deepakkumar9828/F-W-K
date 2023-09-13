import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import './wh.css'
import loader from './images/loading.gif'
const Whether = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        newfood() {
            return newcity()
        }
    }));
    const [city, setcity] = useState('')
    const [data, setdata] = useState([])
    const [load, setload] = useState(false)
    const [found, setfound] = useState(false)
    function newcity() {
        setcity(props.city)
        setload(true)
    }
    useEffect(() => {
        try {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`)
                .then(res => {
                    if (res.ok) {
                        setload(false)
                        return res.json();
                    } else {
                        throw new Error('City not found')
                    }
                })
                .then(d => [setdata([d]), console.log(d), setfound(false),]).catch(error => {
                    console.log(error)
                    setload(false)
                    setfound(true)
                })
        } catch (error) {
            console.log(error);
            setfound(true);
        }
    }, [city])
    // function newstyle(e) {
    //     let styles
    //     if (e === 'light rain') {
    //         styles = { backgroundColor: 'green' }
    //     } else if (e === 'overcast clouds') {
    //         styles = { backgroundColor: 'blue' }
    //     } else if (e === 'moderate rain') {
    //         styles = { backgroundColor: 'purple' }
    //     } else if (e === 'broken clouds') {
    //         styles = { backgroundColor: 'yellow' }
    //     } else if (e === 'scattered clouds') {
    //         styles = { backgroundColor: 'brown' }
    //     }
    //     return styles
    // }
    function gettime(time) {
        var date = new Date().toLocaleDateString()
        var newdate = new Date(time).toLocaleDateString()
        var otherdate = new Date(time).getDate()
        let date1
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        if (date === newdate) {
            date1 = ''
        } else if (otherdate > new Date().getDate()) {
            date1 = `${days[new Date(time).getDay()]}`
        } else if (otherdate < new Date().getDate()) {
            date1 = `${days[new Date(time).getDay()]}`
        }
        return date1
    }
    // function geticon(icondata) {
    //     var icon;
    //     if (icondata[3]) {
    //         icon = `./images/${icondata[3].weather[0].icon}.svg`
    //     } else {
    //         icon = `./images/${icondata[0].weather[0].icon}.svg`
    //     }
    //     return icon
    // }
    function Today(item) {
        let temp = 0
        let aa = new Date();
        let datea = {
            year: aa.getFullYear(),
            month: aa.getMonth() + 1,
            day: aa.getDate(),
            hours: aa.getHours(),
        };
        let mix = `${datea.year}-${datea.month.toString().padStart(2, '0')}-${datea.day.toString().padStart(2, '0')}`;
        let finddata = item.filter(f => f.dt_txt.slice(0, 10) === mix)
        let totaltemp = finddata.reduce((total, data) => total + data.main.temp, 0);
        temp = totaltemp / finddata.length
        temp -= 273.15
        return (
            <div className='container lh-1'>
                {/* <img src={geticon(finddata).toString()} alt="" /> */}
                <p>Temperature: <span id='temp'>{temp.toFixed(0)}°c</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>{finddata[0].weather[0].description}</span></p>
            </div>
        )
    }
    function firstNext(item) {
        let temp = 0
        let aa = new Date();
        let datea = {
            year: aa.getFullYear(),
            month: aa.getMonth() + 1,
            day: aa.getDate() + 1,
            hours: aa.getHours(),
        };
        if (datea.day > 31) {
            datea.month = aa.getMonth() + 2
            datea.day = datea.day - new Date(datea.year, datea.month - 1, 0).getDate();
            console.log(datea.day - new Date(datea.year, datea.month - 1, 0).getDate())
        }
        let mix = `${datea.year}-${datea.month.toString().padStart(2, '0')}-${datea.day.toString().padStart(2, '0')}`;
        console.log(mix)
        let finddata = item.filter(f => f.dt_txt.slice(0, 10) === mix)
        let totaltemp = finddata.reduce((total, data) => total + data.main.temp, 0);
        temp = totaltemp / finddata.length
        temp -= 273.15

        return (
            <div className="timedata shadow">
                <h5>{gettime(finddata[0].dt_txt)}</h5>
                <img id='img' src="https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png" alt="pic" />
                <p id='temp'>{temp.toFixed(0)}°c</p>
            </div>
        )
    }
    function SecondNext(item) {
        let temp = 0
        let aa = new Date();
        let datea = {
            year: aa.getFullYear(),
            month: aa.getMonth() + 1,
            day: aa.getDate() + 2,
            hours: aa.getHours(),
        };
        if (datea.day > 31) {
            datea.month = aa.getMonth() + 2
            datea.day = datea.day - new Date(datea.year, datea.month - 1, 0).getDate();
        }
        let mix = `${datea.year}-${datea.month.toString().padStart(2, '0')}-${datea.day.toString().padStart(2, '0')}`;
        let finddata = item.filter(f => f.dt_txt.slice(0, 10) === mix)
        let totaltemp = finddata.reduce((total, data) => total + data.main.temp, 0);
        temp = totaltemp / finddata.length
        temp -= 273.15

        return (
            <div className="timedata shadow">
                <h5>{gettime(finddata[0].dt_txt)}</h5>
                <img id='img' src="https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png" alt="pic" />
                <p id='temp'>{temp.toFixed(0)}°c</p>
            </div>
        )
    }
    function ThirdNext(item) {
        let temp = 0
        let aa = new Date();
        let datea = {
            year: aa.getFullYear(),
            month: aa.getMonth() + 1,
            day: aa.getDate() + 3,
            hours: aa.getHours(),
        };
        if (datea.day > 31) {
            datea.month = aa.getMonth() + 2
            datea.day = datea.day - new Date(datea.year, datea.month - 1, 0).getDate();
        }
        let mix = `${datea.year}-${datea.month.toString().padStart(2, '0')}-${datea.day.toString().padStart(2, '0')}`;
        let finddata = item.filter(f => f.dt_txt.slice(0, 10) === mix)
        let totaltemp = finddata.reduce((total, data) => total + data.main.temp, 0);
        temp = totaltemp / finddata.length
        temp -= 273.15

        return (
            <div className="timedata shadow">
                <h5>{gettime(finddata[0].dt_txt)}</h5>
                <img id='img' src="https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png" alt="pic" />
                <p id='temp'>{temp.toFixed(0)}°c</p>
            </div>
        )
    }
    function FourthNext(item) {
        let temp = 0
        let aa = new Date();
        let datea = {
            year: aa.getFullYear(),
            month: aa.getMonth() + 1,
            day: aa.getDate() + 4,
            hours: aa.getHours(),
        };
        if (datea.day > 31) {
            datea.month = aa.getMonth() + 2
            datea.day = datea.day - new Date(datea.year, datea.month - 1, 0).getDate();
        }
        let mix = `${datea.year}-${datea.month.toString().padStart(2, '0')}-${datea.day.toString().padStart(2, '0')}`;
        let finddata = item.filter(f => f.dt_txt.slice(0, 10) === mix)
        let totaltemp = finddata.reduce((total, data) => total + data.main.temp, 0);
        temp = totaltemp / finddata.length
        temp -= 273.15
        console.log(mix)
        return (
            <div className="timedata shadow">
                <h5>{gettime(finddata[0].dt_txt)}</h5>
                <img id='img' src="https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png" alt="pic" />
                <p id='temp'>{temp.toFixed(0)}°c</p>
            </div>
        )
    }
    function FifthNext(item) {
        let temp = 0
        let aa = new Date();
        let datea = {
            year: aa.getFullYear(),
            month: aa.getMonth() + 1,
            day: aa.getDate() + 5,
            hours: aa.getHours(),
        };
        if (datea.day > 31) {
            datea.month = aa.getMonth() + 2
            datea.day = datea.day - new Date(datea.year, datea.month - 1, 0).getDate();
            console.log(datea.month - 1)
        }
        let mix = `${datea.year}-${datea.month.toString().padStart(2, '0')}-${datea.day.toString().padStart(2, '0')}`;
        let finddata = item.filter(f => f.dt_txt.slice(0, 10) === mix)
        let totaltemp = finddata.reduce((total, data) => total + data.main.temp, 0);
        temp = totaltemp / finddata.length
        temp -= 273.15
        console.log(mix)
        return (
            <div className="timedata shadow">
                <h5>{gettime(finddata[0].dt_txt)}</h5>
                <img id='img' src="https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png" alt="pic" />
                <p id='temp'>{temp.toFixed(0)}°c</p>
            </div>
        )
    }
    function Alldays(list) {
        return (
            <div className='wh'>
                {Today(list)}
                {firstNext(list)}
                {SecondNext(list)}
                {ThirdNext(list)}
                {FourthNext(list)}
                {FifthNext(list)}
            </div>
        )
    }

    return (
        <>
            <div className='container' style={{ marginTop: '20px' }}>
                {load && <div id="load"><img src={loader} alt="loader" /></div>}
                {!load && !found && data.map((list) => <div className="shadow" id="result" key={list.city.id}>
                    <img id='img' src="https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png" alt="pic" />
                    <div>
                        <p>Today</p>
                        <h3>{list.city.name}</h3>
                        <p >Population: {list.city.population}</p>
                        {Alldays(list.list)}
                    </div>
                </div>)
                }
                {!load && found && <div>
                    <h3>No found city</h3>
                </div>}
            </div>

        </>
    )
})
export default Whether
