import { product } from '../assets/SampleProduct'
import { useEffect, useRef } from 'react'
import { ImageControls } from './ImageControls'

type Props = {
	currentImage: number
	setCurrentImage: React.Dispatch<React.SetStateAction<number>>
}

export const ProductThumbnail = ({ currentImage, setCurrentImage }: Props) => {
	const slider = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (currentImage <= 2 || !slider.current) return

		const translateAmount = (25 - 2.5) * (-currentImage + 3)

		slider.current.style.transform = `translateX(${translateAmount}%)`
	}, [currentImage])

	return (
		<div className='w-full relative overflow-hidden'>
			<div className='flex gap-4' ref={slider}>
				{product?.images.map((img, index) => (
					<div
						key={index}
						className={`product-thumbnail ${
							index === currentImage ? 'border-2 border-primary-orange before:bg-primary-pale/75' : ''
						}`}
						onClick={() => setCurrentImage(index)}>
						<img src={img.image} alt='' className='select-none' />
					</div>
				))}
			</div>

			<ImageControls currentImage={currentImage} setCurrentImage={setCurrentImage} />
		</div>
	)
}
