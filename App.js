import React, { useState } from 'react'

import Onboard from './components/Onboard'
import Home from './components/Home'

const App = () => {
	const [showOnboard, setShowOnboard] = useState(true)

	const handleBoardFinish = () => {
		setShowOnboard(false)
	}

	return (
		<>
			{showOnboard && <Onboard handleDone={handleBoardFinish} />}
			{!showOnboard && <Home />}
		</>
	)
}

export default App
