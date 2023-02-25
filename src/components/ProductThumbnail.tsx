import { product } from '../assets/SampleProduct'
import { ReactComponent as IconNext } from '../assets/icon-next.svg'
import { ReactComponent as IconPrevious } from '../assets/icon-previous.svg'
import { useEffect, useRef } from 'react'
import usePrevious from '../hooks/usePrevious'

type Props = {
	currentImage: number
	setCurrentImage: React.Dispatch<React.SetStateAction<number>>
}

export const ProductThumbnail = ({ currentImage, setCurrentImage }: Props) => {
	const slider = useRef<HTMLDivElement>(null)

	const nextImage = () => {
		if (currentImage === product.images.length - 1) return
		setCurrentImage(prevIndex => prevIndex + 1)
	}

	const previousImage = () => {
		if (currentImage === 0) return
		setCurrentImage(prevIndex => prevIndex - 1)
	}

	const prevCurrentImage = usePrevious(currentImage)!

	useEffect(() => {
		console.log(prevCurrentImage, currentImage)

		if (prevCurrentImage < currentImage) {
			if (currentImage <= 2) return

			const translateAmount = (25 - 2.5) * (-currentImage + 2)
			if (slider.current) slider.current.style.transform = `translateX(${translateAmount}%)`
		} else {
			if (currentImage <= 2) return

			const translateAmount = (25 - 2.5) * (-currentImage + 3)
			if (slider.current) slider.current.style.transform = `translateX(${translateAmount}%)`
		}
	}, [currentImage])

	return (
		<div className='w-full relative hidden md:block overflow-hidden'>
			<div className='md:flex gap-4 cos2' ref={slider}>
				{product?.images.map((img, index) => (
					<div
						key={index}
						className={`relative rounded-xl overflow-hidden cursor-pointer
          before:w-full before:h-full before:absolute before:transition before:duration-300
          hover:before:bg-primary-pale/75 cos
          
          ${index === currentImage ? 'border-2 border-primary-orange before:bg-primary-pale/75' : ''}`}
						onClick={() => setCurrentImage(index)}>
						<img src={img.image} alt='' className='select-none' />
					</div>
				))}
			</div>

			{currentImage !== 0 && (
				<div
					className='next-prev-image-button absolute top-1/2 left-2 -translate-y-1/2'
					onClick={() => previousImage()}>
					<IconPrevious className='group-hover:stroke-primary-orange' />
				</div>
			)}

			{currentImage !== product.images.length - 1 && (
				<div className='next-prev-image-button absolute top-1/2 right-2 -translate-y-1/2' onClick={() => nextImage()}>
					<IconNext className='group-hover:stroke-primary-orange' />
				</div>
			)}
		</div>
	)
}
