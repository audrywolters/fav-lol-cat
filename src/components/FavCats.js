import React, { useContext } from 'react'
import { MyContext } from '../context/index'

const FavCats = () => {

	const context = useContext(MyContext)

	return (
		<>
			FavCats
		</>
	)
}

export default FavCats