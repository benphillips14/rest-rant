const React = require('react')
const Def = require('../default')

function edit(data){
    return(

        <Def>
            <main>
                <h1></h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='name'>The place name:</label>
                        <input className='form-control text-center' id='name' name='name' value={data.place.name} required></input>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='pic'>The place image:</label>
                        <input className='form-control text-center' id='pic' name='pic' value={data.place.pic}></input>
                        {/* type='url' */}
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='city'>The city name:</label>
                        <input className ='form-control text-center' id='city' name='city' value={data.place.city}></input>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='state'>The state name:</label>
                        <input className='form-control text-center' id='state' name='state' value={data.place.state}></input>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='cuisines'>Cuisine:</label>
                        <input className='form-control text-center' id='cuisines' name='cuisines' value = {data.place.cuisines} required></input>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='founded'>Founded:</label>
                        <input className='form-control text-center' id='founded' name='founded' value={data.place.founded}></input>
                    </div>
                    <input type='submit' className="btn btn-primary" value='Edit Place'></input>
                </form>

            </main>
        </Def>
    )
}

module.exports = edit