import { useState, useEffect, useRef } from 'react'
import { product } from '../assets/SampleProduct'
import { ImageControls } from './ImageControls'
import { Lightbox } from './Lightbox'

type Props = {
	currentImage: number
	setCurrentImage: React.Dispatch<React.SetStateAction<number>>
}

export const ProductImages = ({ currentImage, setCurrentImage }: Props) => {
	const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
	const [showLightbox, setShowLightbox] = useState(false)
	const container = useRef<HTMLDivElement>(null)
	const image = useRef<HTMLImageElement>(null)

	useEffect(() => {
		const handleWindowMouseMove = (e: MouseEvent) => {
			setMousePos({
				x: e.clientX,
				y: e.clientY
			})
		}
		window.addEventListener('mousemove', e => handleWindowMouseMove(e))

		return () => {
			window.removeEventListener('mousemove', e => handleWindowMouseMove(e))
		}
	}, [])

	const getMousePos = () => {
		let x: number = 0,
			y: number = 0

		if (!container.current) return { x, y }

		const bounds = container.current.getBoundingClientRect()

		x = (mousePos.x - bounds.left) / 1.5
		y = (mousePos.y - bounds.top) / 1.5

		return { x, y }
	}

	const setImageStyles = () => {
		const { x, y } = getMousePos()!

		if (image.current) image.current.style.transform = `scale(3) translate(-${x}px, -${y}px)`
	}

	const resetImageStyles = () => {
		if (image.current) image.current.style.transform = `scale(1) translate(0, 0)`
	}

	return (
		<div className='w-full relative border-y border-gray-200 overflow-hidden md:rounded-xl' ref={container}>
			<img
				src={product.images[currentImage].image}
				alt=''
				className='w-full h-full select-none cursor-zoom-in origin-top-left'
				ref={image}
				onMouseMove={() => setImageStyles()}
				onMouseLeave={() => resetImageStyles()}
				onClick={() => setShowLightbox(true)}
			/>

			<ImageControls currentImage={currentImage} setCurrentImage={setCurrentImage} />

			<div className='absolute bottom-4 right-4 py-1 px-2 text-gray-300 bg-black/75 rounded-md'>
				{currentImage + 1} / {product.images.length}
			</div>

			<Lightbox
				currentImage={currentImage}
				setCurrentImage={setCurrentImage}
				showLightbox={showLightbox}
				setShowLightbox={setShowLightbox}
			/>
		</div>
	)
}
