import { product } from '../assets/SampleProduct'
import { ReactComponent as CartIcon } from '../assets/icon-cart.svg'
import { ReactComponent as MinusIcon } from '../assets/icon-minus.svg'
import { ReactComponent as PlusIcon } from '../assets/icon-plus.svg'
import { useState } from 'react'

export const ProductDetails = () => {
	const [quantity, setQuantity] = useState<number>(1)

	const decreaseItemCount = () => {
		if (quantity === 1) return
		setQuantity(prevItemCount => prevItemCount - 1)
	}

	const increaseItemCount = () => {
		setQuantity(prevItemCount => prevItemCount + 1)
	}

	const addToCart = (id: string) => {
		const newItem = {
			id: id,
			quantity: quantity
		}
		let cart = [newItem]
		const cartDocument = JSON.parse(localStorage.getItem('cart')!)

		if (cartDocument?.length) {
			const index = cartDocument.findIndex((item: { id: string }) => item.id === newItem.id)

			if (index !== -1) {
				cartDocument[index].quantity += quantity

				cart = [...cartDocument]
			} else {
				cart = [...cartDocument, newItem]
			}
		}

		localStorage.setItem('cart', JSON.stringify(cart))
	}

	return (
		<div className='max-md:wrapper py-4 md:my-20 md:mx-6 lg:mx-10 xl:mx-16'>
			<h3 className='uppercase font-bold text-sm text-primary-orange drop-shadow-xl mb-2'>{product.brand}</h3>

			<h1 className='text-3xl font-bold text-grayBlue-900 mb-4 md:text-4xl lg:text-5xl'>{product.name}</h1>

			<p className='text-grayBlue-700 mb-6'>{product.description}</p>

			<div className='flex items-center justify-between mb-4'>
				{product.discount ? (
					<>
						<div className='flex items-center gap-4'>
							<span className='text-3xl font-bold text-grayBlue-900'>
								{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
									product.price - (product.price * product.discount) / 100
								)}
							</span>

							<span className='py-0.5 px-2 text-md text-primary-orange font-bold bg-primary-pale rounded-lg'>
								-{product.discount}%
							</span>
						</div>

						<p className='line-through text-grayBlue-500 font-bold'>
							{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
						</p>
					</>
				) : (
					<p className='text-3xl font-bold text-grayBlue-900'>
						{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
					</p>
				)}
			</div>

			<div className='flex flex-col gap-4'>
				<div className='w-full flex items-center justify-between rounded-lg bg-grayBlue-100'>
					<button className='p-6 fill-primary-orange hover:fill-primary-orange/60' onClick={() => decreaseItemCount()}>
						<MinusIcon />
					</button>

					<span className='font-bold'>{quantity}</span>

					<button className='p-6 fill-primary-orange hover:fill-primary-orange/60' onClick={() => increaseItemCount()}>
						<PlusIcon />
					</button>
				</div>

				<button
					className='flex items-center justify-center gap-2 p-4 rounded-lg text-white font-bold bg-primary-orange shadow-sm shadow-primary-orange hover:bg-primary-orange/60'
					onClick={() => addToCart(product.id)}>
					<CartIcon className='fill-white' />
					<span>Add to cart</span>
				</button>
			</div>
		</div>
	)
}
