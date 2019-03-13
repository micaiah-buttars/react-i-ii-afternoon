import React, { Component } from 'react'
import data from './data'

class Card extends Component {

    
   
    render() {
        let {index} = this.props;

      return (
        <div className="cardContainer">
            <h2 className="cardIndex"><strong>
                {`${data[index].id}`}/{`${data.length}`}
                    </strong></h2>
            <h1 className="nameDisplay">{`${data[index].name.first} ${data[index].name.last}`}</h1>
                <p><strong>From: </strong>
                    {`${data[index].city}, ${data[index].country}`}
                </p> 
                <p><strong>Job Title: </strong>
                    {`${data[index].title}`}
                </p>
                <p><strong>Employer: </strong>
                    {`${data[index].employer}`}
                </p>
                <br/>
            <p><strong>Favorite Movies:</strong>
                <ol>
                {data[index].favoriteMovies.map((movie) => <li>{movie}</li>)}
                </ol>
            </p>

    
        </div>
      );
    }
  }
  
  export default Card;
  