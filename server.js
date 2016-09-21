const express = require( 'express' );
const app = express();
const port = 4000;
const bodyParser = require( 'body-parser' );

app.use( bodyParser.json() );

const messages = [
  {
    'name': 'Smokey'
    , 'message': 'Only you can prevent forest fires.'
    , 'avatar_url': 'https://upload.wikimedia.org/wikipedia/commons/6/62/SmokeyTheBearHeadshot.GIF'
  } ,
  {
    'name': 'Pooh bear'
    , 'message': 'Oh bother.'
    , 'avatar_url': 'https://upload.wikimedia.org/wikipedia/en/1/10/Winniethepooh.png'
  }
];

app.options( '*', ( req, res ) => {
  res
    .status( 200 )
    .set( {
        'Content-Type': 'application/json'
        , 'Access-Control-Allow-Origin': '*'
        , 'Access-Control-Allow-Methods': 'OPTIONS, GET, POST'
        , 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        , 'X-XSS-Protection': '1; mode=block'
        , 'X-Frame-Options': 'SAMEORIGIN'
        , 'Content-Security-Policy': "default-src 'self' devmountain.github.io"
      } )
    .send( JSON.stringify( messages ) );
} );

app.get( '/', ( req, res ) => {
  res
    .status( 200 )
    .set( {
        'Content-Type': 'application/json'
        , 'Access-Control-Allow-Origin': '*'
        , 'Access-Control-Allow-Methods': 'OPTIONS, GET, POST'
        , 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        , 'X-XSS-Protection': '1; mode=block'
        , 'X-Frame-Options': 'SAMEORIGIN'
        , 'Content-Security-Policy': "default-src 'self' devmountain.github.io"
      } )
    .send( JSON.stringify( messages ) );
} );

app.post( '/', ( req, res ) => {
  messages.push( {
    message: req.body.message
    , name: req.body.name
    , avatar_url: req.body.url
    , time: new Date()
  } );

  res
    .status( 200 )
    .set( {
        'Content-Type': 'application/json'
        , 'Access-Control-Allow-Origin': '*'
        , 'Access-Control-Allow-Methods': 'OPTIONS, GET, POST'
        , 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        , 'X-XSS-Protection': '1; mode=block'
        , 'X-Frame-Options': 'SAMEORIGIN'
        , 'Content-Security-Policy': "default-src 'self' devmountain.github.io"
      } )
    .send( JSON.stringify( messages ) );
} );

app.listen( port, () => { console.log( `Listening on ${ port }` ); } );
