import { ReactComponent as IconNext } from '../assets/icon-next.svg'
import { ReactComponent as IconPrevious } from '../assets/icon-previous.svg'
import { product } from '../assets/SampleProduct'

type Props = {
	currentImage: number
	setCurrentImage: React.Dispatch<React.SetStateAction<number>>
}

export const ImageControls = ({ currentImage, setCurrentImage }: Props) => {
	const nextImage = () => {
		if (currentImage === product.images.length - 1) return
		setCurrentImage((prevIndex: number) => prevIndex + 1)
	}

	const previousImage = () => {
		if (currentImage === 0) return
		setCurrentImage((prevIndex: number) => prevIndex - 1)
	}

	return (
		<>
			{currentImage !== 0 && (
				<div className='prev group next-prev-image-button left-2' onClick={() => previousImage()}>
					<IconPrevious className='group-hover:stroke-primary-orange' />
				</div>
			)}

			{currentImage !== product.images.length - 1 && (
				<div className='next group next-prev-image-button right-2' onClick={() => nextImage()}>
					<IconNext className='group-hover:stroke-primary-orange' />
				</div>
			)}
		</>
	)
}
