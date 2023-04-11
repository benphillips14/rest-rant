const React = require('react')
const Def = require('./default')


function home(){
    return(
        <Def>
            <main>
                <h1>Rest Rant</h1>
                <div>
                    <img src="/images/allec-gomes-strawberry-unsplash.jpg" alt='strawberry' className='strawberry'></img>
                    <div>
                    Photo by <a href="https://unsplash.com/@allecgomes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Allec Gomes</a> on <a href="https://unsplash.com/s/photos/fruit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                {/* Button that sends you to the places route */}
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )

}

//Home exported.
module.exports = home




  