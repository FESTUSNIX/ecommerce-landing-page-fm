import './App.css'
import { useState } from 'react'
import { Navbar, ProductDetails, ProductImages, ProductThumbnail } from './components'

function App() {
	const [currentImage, setCurrentImage] = useState<number>(0)

	return (
		<div className='App'>
			<header>
				<Navbar />
			</header>

			<main className='min-h-full md:wrapper flex flex-col lg:flex-row md:items-center'>
				<div className='flex flex-col items-start gap-6 grow-0 shrink-0 basis-1/2 xl:basis-2/5 md:my-20 lg:mx-10 xl:mx-16'>
					<ProductImages currentImage={currentImage} setCurrentImage={setCurrentImage} />
					<div className='hidden md:block'>
						<ProductThumbnail currentImage={currentImage} setCurrentImage={setCurrentImage} />
					</div>
				</div>
				<ProductDetails />
			</main>
		</div>
	)
}

export default App
