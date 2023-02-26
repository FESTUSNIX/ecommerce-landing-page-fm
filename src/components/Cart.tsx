import OutsideClickHandler from 'react-outside-click-handler'
import { product } from '../assets/SampleProduct'
import { useProductPrice } from '../hooks/useProductPrice'
import { ReactComponent as DeleteIcon } from '../assets/icon-delete.svg'

type Props = {
	show: boolean
	setShow: (a: boolean) => void
}

export const Cart = ({ show, setShow }: Props) => {
	const { calculateDiscount, formatPrice } = useProductPrice({ product })

	const quantity = 3

	if (!show) return null
	return (
		<div className='absolute cart min-w-[300px] max-md:left-1/2 bottom-0 md:w-max md:bottom-1/4 md:right-16'>
			<OutsideClickHandler onOutsideClick={() => setShow(false)} display='contents'>
				<div className='shadow-lg rounded-lg bg-white z-50'>
					<h2 className='font-bold p-5 border-b'>Cart</h2>

					<div className='flex flex-col p-5'>
						{/* <h3 className='font-bold text-grayBlue-700 py-12'>Your cart is empty.</h3> */}

						<div className='flex items-center gap-4'>
							<img src={product.images[0].thumbnail} alt='' className='rounded-md w-12' />

							<div>
								<p className='text-grayBlue-700'>{product.name}</p>
								<p>
									<span className='text-grayBlue-700'>
										{formatPrice(calculateDiscount(product.price))}
										<span> x {quantity}</span>
									</span>
									<span className='font-bold ml-2'> {formatPrice(calculateDiscount(product.price) * quantity)}</span>
								</p>
							</div>

							<div className='ml-auto p-1 cursor-pointer'>
								<DeleteIcon />
							</div>
						</div>

						<button className='flex items-center justify-center gap-2 p-4 mt-8 rounded-lg text-white font-bold bg-primary-orange shadow-sm shadow-primary-orange hover:bg-primary-orange/60'>
							Checkout
						</button>
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	)
}
