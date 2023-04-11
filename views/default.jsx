const React = require('react')

//Function  with html as parameter
function Def(html){
    return(
        <html>
            <head>
                <title>Default Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
                <link rel='stylesheet' href="/css/style.css"></link>
            
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            {/* This is for the homepage */}
                            <a href='/'>Homepage</a>
                        </li>
                        <li>
                            {/* This is for places */}
                            <a href='/places'>Places</a>
                        </li>
                        <li>
                            {/* Page to add new places */}
                            <a href='/places/new'>Add some new places</a>
                        </li>
                    </ul>
                </nav>
                    {html.children}
            </body>
        </html>
    )

}

//Def is exported.
module.exports = Def
