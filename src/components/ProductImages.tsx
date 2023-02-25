import { ReactComponent as IconNext } from '../assets/icon-next.svg'
import { ReactComponent as IconPrevious } from '../assets/icon-previous.svg'
import { product } from '../assets/SampleProduct'

type Props = {
	currentImage: number
	setCurrentImage: React.Dispatch<React.SetStateAction<number>>
}

export const ProductImages = ({ currentImage, setCurrentImage }: Props) => {
	const nextImage = () => {
		if (currentImage === product.images.length - 1) return setCurrentImage(0)
		setCurrentImage(prevIndex => prevIndex + 1)
	}

	const previousImage = () => {
		if (currentImage === 0) return setCurrentImage(product.images.length - 1)
		setCurrentImage(prevIndex => prevIndex - 1)
	}

	return (
		<div className='w-full relative border-y border-gray-200 overflow-hidden md:rounded-xl'>
			<img src={product.images[currentImage].image} alt='' className='w-full h-full select-none' />

			<div className='w-full absolute top-1/2 left-0 flex justify-between px-4 -translate-y-1/2'>
				<div className='next-prev-image-button group' onClick={() => previousImage()}>
					<IconPrevious className='group-hover:stroke-primary-orange' />
				</div>
				<div className='next-prev-image-button group' onClick={() => nextImage()}>
					<IconNext className='group-hover:stroke-primary-orange' />
				</div>
			</div>

			<div className='absolute bottom-4 right-4 py-1 px-2 text-gray-300 bg-black/75 rounded-md'>
				{currentImage + 1} / {product.images.length}
			</div>
		</div>
	)
}
