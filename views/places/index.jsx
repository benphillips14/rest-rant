const React =  require('react')
const Def = require('../default')

function places(data){
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${place.id}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  
    return(
        <Def>
            <main>
                <h1> Places Index Page</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
                <a href="/places/new">
                    <button className="btn-primary">Add a New Place Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = places
  
