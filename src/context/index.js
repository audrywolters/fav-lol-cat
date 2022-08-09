import React, { Component } from 'react'
import CatPic from '../components/CatPic'

import Bike from '../images/bike.jpg'
import Chess from '../images/chess.jpg'
import Corn from '../images/corncob.jpg'
import Football from '../images/football.jpg'
import Revolving from '../images/revolvingDoor.jpg'
import Roller from '../images/rollerCoaster.jpg'
import Shovel from '../images/shovel.jpg'
import Waltz from '../images/waltz.jpg'
import Window from '../images/window.jpg'

const MyContext = React.createContext()

class MyProvider extends Component {

	state = {
		catPics: [
			<CatPic source={Bike} />,
			<CatPic source={Chess} />,
			<CatPic source={Corn} />,
			<CatPic source={Football} />,
			<CatPic source={Revolving} />,
			<CatPic source={Roller} />,
			<CatPic source={Shovel} />,
			<CatPic source={Waltz} />,
			<CatPic source={Window} />
			]
	}

	setFavorite = () => {
		
	}


	render() {
		return (
			<>
				<MyContext.Provider value={{state: this.state}}>
					{this.props.children}
				</MyContext.Provider>
			</>
		)
	}
}

export {
	MyContext,
	MyProvider
}