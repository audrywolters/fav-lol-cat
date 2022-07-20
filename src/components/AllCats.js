import React, { useContext } from 'react'
import { MyContext } from '../context/index'
import './AllCats.css'

const AllCats = () => {

	const context = useContext(MyContext)

	return (
		<>
			<ul>
				{
					context.state.catPics.map((catPic, i) => (
						<li key={i}>{catPic}</li>
					))
				}
			</ul>
		</>
	)
}

export default AllCats
