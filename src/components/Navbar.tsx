import { useState } from 'react'
import iconMenu from '../assets/icon-menu.svg'
import logo from '../assets/logo.svg'
import { ReactComponent as CartIcon } from '../assets/icon-cart.svg'
import avatarImg from '../assets/image-avatar.png'
import closeIcon from '../assets/icon-close.svg'

export const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)

	const outsideClickHandler = (container: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		if ((container.target as HTMLElement).id === 'mobile-nav') setShowMenu(false)
	}

	return (
		<div className='flex items-center justify-between py-4 md:py-6 md:border-b wrapper'>
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
				<CartIcon className='cursor-pointer fill-grayBlue-700 hover:fill-grayBlue-900 transition duration-300' />
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
				<div
					className='md:hidden fixed top-0 left-0 w-screen h-screen bg-black/75'
					onClick={e => outsideClickHandler(e)}
					id='mobile-nav'>
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
				</div>
			)}
		</div>
	)
}
