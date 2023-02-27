import OutsideClickHandler from 'react-outside-click-handler'
import { product } from '../assets/SampleProduct'
import { useProductPrice } from '../hooks/useProductPrice'
import { ReactComponent as DeleteIcon } from '../assets/icon-delete.svg'
import { useEffect, useState } from 'react'

type Props = {
	show: boolean
	setShow: (a: boolean) => void
}

export const Cart = ({ show, setShow }: Props) => {
	const { calculateDiscount, formatPrice } = useProductPrice({ product })

	const [cartProducts, setCartProducts] = useState<{ id: string; quantity: number }[]>([])

	useEffect(() => {
		const storageItems = JSON.parse(localStorage.getItem('cart') || '[]')

		setCartProducts(storageItems)
	}, [])

	const removeProduct = (index: number) => {
		const cartDocument = JSON.parse(localStorage.getItem('cart') || '[]')

		cartDocument.splice(index, 1)

		localStorage.setItem('cart', JSON.stringify(cartDocument))
	}

	const getProduct = (id: string) => {
		// let's imagine that we're fetching the product

		return product
	}

	if (!show) return null
	return (
		<div className='absolute cart min-w-[300px] max-md:left-1/2 bottom-0 md:w-max md:bottom-1/4 md:right-16'>
			<OutsideClickHandler onOutsideClick={() => setShow(false)} display='contents'>
				<div className='shadow-lg rounded-lg bg-white z-50'>
					<h2 className='font-bold p-5 border-b'>Cart</h2>

					<div className='flex flex-col p-5 gap-4'>
						{!cartProducts.length && (
							<h3 className='self-center font-bold text-grayBlue-700 py-12'>Your cart is empty.</h3>
						)}

						{cartProducts.length !== 0 &&
							cartProducts.map((item, index) => (
								<div className='flex items-center gap-4' key={item.id}>
									<img src={getProduct(item.id).images[0].thumbnail} alt='' className='rounded-md w-12' />

									<div>
										<p className='text-grayBlue-700'>{getProduct(item.id).name}</p>
										<p>
											<span className='text-grayBlue-700'>
												{formatPrice(calculateDiscount(getProduct(item.id).price))}
												<span> x {item.quantity}</span>
											</span>
											<span className='font-bold ml-2'>
												{' '}
												{formatPrice(calculateDiscount(getProduct(item.id).price) * item.quantity)}
											</span>
										</p>
									</div>

									<div className='ml-auto p-1 cursor-pointer' onClick={() => removeProduct(index)}>
										<DeleteIcon />
									</div>
								</div>
							))}
						{cartProducts.length !== 0 && (
							<button className='flex items-center justify-center gap-2 p-4 mt-8 rounded-lg text-white font-bold bg-primary-orange shadow-sm shadow-primary-orange hover:bg-primary-orange/60'>
								Checkout
							</button>
						)}
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	)
}
