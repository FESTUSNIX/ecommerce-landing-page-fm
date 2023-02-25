import img1 from './image-product-1.jpg'
import thumb1 from './image-product-1-thumbnail.jpg'
import img2 from './image-product-2.jpg'
import thumb2 from './image-product-2-thumbnail.jpg'
import img3 from './image-product-3.jpg'
import thumb3 from './image-product-3-thumbnail.jpg'
import img4 from './image-product-4.jpg'
import thumb4 from './image-product-4-thumbnail.jpg'

type Product = {
	name: string
	brand: string
	description: string
	price: number
	discount?: number
	images: { image: string; thumbnail: string }[]
}

export const product: Product = {
	name: 'Fall Limited Edition Sneakers',
	brand: 'sneaker company',
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
	price: 250,
	discount: 50,
	images: [
		{
			image: img1,
			thumbnail: thumb1
		},
		{
			image: img2,
			thumbnail: thumb2
		},
		{
			image: img3,
			thumbnail: thumb3
		},
		{
			image: img3,
			thumbnail: thumb3
		},
		{
			image: img3,
			thumbnail: thumb3
		},
		{
			image: img4,
			thumbnail: thumb4
		}
	]
}
