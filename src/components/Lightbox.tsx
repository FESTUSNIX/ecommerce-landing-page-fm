import React, { useEffect } from 'react'
import { ReactComponent as IconClose } from '../assets/icon-close.svg'
import { product } from '../assets/SampleProduct'
import { ImageControls } from './ImageControls'
import { ProductThumbnail } from './ProductThumbnail'
import OutsideClickHandler from 'react-outside-click-handler'

type Props = {
	currentImage: number
	setCurrentImage: React.Dispatch<React.SetStateAction<number>>
	setShowLightbox: (a: boolean) => void
	showLightbox: boolean
}

export const Lightbox = ({ currentImage, setCurrentImage, showLightbox, setShowLightbox }: Props) => {
	useEffect(() => {
		document.body.classList.toggle('fixed')
	}, [showLightbox])

	if (!showLightbox) return null
	return (
		<div className='w-full h-full fixed top-0 left-0 flex items-start justify-center bg-white z-50 md:bg-black/50 md:items-center'>
			<OutsideClickHandler onOutsideClick={() => setShowLightbox(false)} display='contents'>
				<div className='w-full h-full flex flex-col items-center justify-between z-30 md:max-w-2xl md:justify-center'>
					<div
						className='p-4
					fill-grayBlue-900 cursor-pointer self-end duration-300 
					hover:fill-primary-orange md:fill-white md:p-2 md:-mx-2'
						onClick={() => setShowLightbox(false)}>
						<IconClose className='scale-125' />
					</div>

					<div className='relative'>
						<img
							src={product.images[currentImage].image}
							alt=''
							className='w-full h-full select-none cursor-zoom-in origin-top-left md:rounded-xl'
						/>
						<div className='lightbox-controls'>
							<ImageControls currentImage={currentImage} setCurrentImage={setCurrentImage} />
						</div>
					</div>
					<div className='max-md:mb-10 md:mx-12 md:mt-10'>
						<ProductThumbnail currentImage={currentImage} setCurrentImage={setCurrentImage} />
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	)
}
