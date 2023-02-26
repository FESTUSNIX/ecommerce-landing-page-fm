type Product = {
	name: string
	brand: string
	description: string
	price: number
	discount?: number
	images: { image: string; thumbnail: string }[]
}

type Props = {
	product: Product
}

export const useProductPrice = ({ product }: Props) => {
	const formatPrice = (price: number = product.price) =>
		new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)

	const calculateDiscount = (price: number = product.price, discount: number = product.discount ?? 0): number => {
		if (!discount) return price

		return price - (price * discount) / 100
	}

	return { formatPrice, calculateDiscount }
}
