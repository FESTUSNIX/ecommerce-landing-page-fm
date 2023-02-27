import { useState } from 'react'
import iconMenu from '../assets/icon-menu.svg'
import logo from '../assets/logo.svg'
import { ReactComponent as CartIcon } from '../assets/icon-cart.svg'
import avatarImg from '../assets/image-avatar.png'
import closeIcon from '../assets/icon-close.svg'
import { Cart } from './Cart'
import OutsideClickHandler from 'react-outside-click-handler'

export const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)
	const [showCart, setShowCart] = useState(false)

	const getProductsQuantity = () => {
		const items = JSON.parse(localStorage.getItem('cart') || '[]')

		let total = 0

		items?.forEach((item: { id: string; quantity: number }) => (total += item.quantity))

		return total
	}

	getProductsQuantity()

	return (
		<div className='relative flex items-center justify-between py-4 md:py-6 md:border-b wrapper z-40'>
			<div className='flex items-end md:items-center'>
				<img
					src={iconMenu}
					alt='menu icon'
					className='p-2 mr-2 -ml-2 cursor-pointer md:hidden'
					onClick={() => setShowMenu(true)}
				/>

				<h1 className='md:mr-8 lg:mr-14 py-2 cursor-pointer'>
					<a href='/'>
						<img src={logo} alt='sneakers logo' />
					</a>
				</h1>

				<div className='hidden md:flex gap-6 lg:gap-8 nav-links'>
					<a href='/collections'>Collections</a>
					<a href='/men'>Men</a>
					<a href='/women'>Women</a>
					<a href='/about'>About</a>
					<a href='/contact'>Contact</a>
				</div>
			</div>

			<div className='flex items-center gap-3 md:gap-6'>
				<div className='relative'>
					<CartIcon
						className='cursor-pointer fill-grayBlue-700 hover:fill-grayBlue-900 transition duration-300'
						onClick={() => setShowCart(true)}
					/>
					{getProductsQuantity() !== 0 && (
						<div className='absolute -top-1/2 -right-1/2 font-bold text-xs bg-primary-orange rounded-full px-2'>
							{getProductsQuantity()}
						</div>
					)}
				</div>

				<img
					src={avatarImg}
					alt='profile'
					className='h-9 md:h-11 
					cursor-pointer
					rounded-full
					border-2
					border-transparent
					transition duration-300 
					hover:border-primary-orange'
				/>
			</div>
			{showMenu && (
				<div className='md:hidden fixed top-0 left-0 w-screen h-screen bg-black/75'>
					<OutsideClickHandler onOutsideClick={() => setShowMenu(false)} display='contents'>
						<div className='h-full w-max p-8 bg-white'>
							<img
								src={closeIcon}
								alt='close button'
								className='p-2 -m-2 cursor-pointer'
								onClick={() => setShowMenu(false)}
							/>

							<div className='w-full flex flex-col gap-4 mt-12 mr-20 mobile-nav-links'>
								<a href='/collections'>Collections</a>
								<a href='/men'>Men</a>
								<a href='/women'>Women</a>
								<a href='/about'>About</a>
								<a href='/contact'>Contact</a>
							</div>
						</div>
					</OutsideClickHandler>
				</div>
			)}

			<Cart show={showCart} setShow={setShowCart} />
		</div>
	)
}
