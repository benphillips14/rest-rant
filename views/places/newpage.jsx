const React = require('react')
//Default
const Def = require('../default')

function newPage(data){
    let message = ''
    if (data.message){
        message = (
            <h4 className='alert-danger'>
                {data.message}
            </h4>
        )
    }
    return(
        <Def>
            <main>
                {message}
                <h1>Add a new place</h1>
                {/*Action sends to places back to index */}
                <form method="POST" action="/places">
                    <div className='form-group'>
                        <label htmlFor='name'>The place name:</label>
                        <input className='form-control text-center' id='name' name='name' required></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>The place image:</label>
                        <input className='form-control text-center' type='url' id='pic' name='pic'></input>
                        {/* type='url' */}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>The city name:</label>
                        <input className ='form-control text-center' id='city' name='city'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>The state name:</label>
                        <input className='form-control text-center' id='state' name='state'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisine:</label>
                        <input className='form-control text-center' id='cuisines' name='cuisines' required></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='founded'>Founded</label>
                        <input type='number' className='form-control text-center' id='founded' name='founded' value={new Date().getFullYear()}></input>
                    </div>
                    <input type='submit' className="btn btn-primary" value='Add Place'></input>
                </form>

                {/* This is the form from the assignment */}
                {/* <form method= "POST" action="/places">
                        <div>
                            <label htmlFor="name">Place Name</label>
                            <input id="name" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="pic">Place Picture</label>
                            <input id="pic" name="pic" />
                        </div>
                        <div>
                            <label htmlFor="city">City</label>
                            <input id="city" name="city" />
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                            <input id="state" name="state" />
                        </div>
                        <div>
                            <label htmlFor="cuisines">Cuisines</label>
                            <input id="cuisines" name="cuisines" required />
                        </div>
                        <input type="submit" value="Add Place" />
                        </form> */}

            </main>
        </Def>
    )

}

module.exports = newPage