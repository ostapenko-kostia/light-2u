import * as motion from 'framer-motion/client'
import { Container } from '../layout/container'
import Image from 'next/image'
import Link from 'next/link'

export function HomeCategories() {
	return (
		<motion.div
			className='py-12'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1 } }}
		>
			<Container>
				<h2 className='text-xl uppercase tracking-wide'>Категорії</h2>
				<section className='grid grid-cols-4 gap-8 w-full pt-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-[350px]:!grid-cols-1'>
					<article className='w-full h-full group'>
						<Link
							href='/catalog'
							className='w-full h-full flex flex-col gap-3'
						>
							<div className='relative w-full h-full aspect-square overflow-hidden'>
								<Image
									src='/test2.webp'
									alt='test'
									fill
									sizes='100%, 100%'
									className='object-cover aspect-square rounded-sm group-hover:scale-110 group-hover:brightness-90 transition-all duration-1000'
								/>
							</div>
							<h3 className='text-lg'>Треки під гіпсокартон</h3>
						</Link>
					</article>
					<article className='w-full h-full group'>
						<Link
							href='/catalog'
							className='w-full h-full flex flex-col gap-3'
						>
							<div className='relative w-full h-full aspect-square overflow-hidden'>
								<Image
									src='/test2.webp'
									alt='test'
									fill
									sizes='100%, 100%'
									className='object-cover aspect-square rounded-sm group-hover:scale-110 group-hover:brightness-90 transition-all duration-1000'
								/>
							</div>
							<h3 className='text-lg'>Треки під гіпсокартон</h3>
						</Link>
					</article>
					<article className='w-full h-full group'>
						<Link
							href='/catalog'
							className='w-full h-full flex flex-col gap-3'
						>
							<div className='relative w-full h-full aspect-square overflow-hidden'>
								<Image
									src='/test2.webp'
									alt='test'
									fill
									sizes='100%, 100%'
									className='object-cover aspect-square rounded-sm group-hover:scale-110 group-hover:brightness-90 transition-all duration-1000'
								/>
							</div>
							<h3 className='text-lg'>Треки під гіпсокартон</h3>
						</Link>
					</article>
					<article className='w-full h-full group'>
						<Link
							href='/catalog'
							className='w-full h-full flex flex-col gap-3'
						>
							<div className='relative w-full h-full aspect-square overflow-hidden'>
								<Image
									src='/test2.webp'
									alt='test'
									fill
									sizes='100%, 100%'
									className='object-cover aspect-square rounded-sm group-hover:scale-110 group-hover:brightness-90 transition-all duration-1000'
								/>
							</div>
							<h3 className='text-lg'>Треки під гіпсокартон</h3>
						</Link>
					</article>
					<article className='w-full h-full group'>
						<Link
							href='/catalog'
							className='w-full h-full flex flex-col gap-3'
						>
							<div className='relative w-full h-full aspect-square overflow-hidden'>
								<Image
									src='/test2.webp'
									alt='test'
									fill
									sizes='100%, 100%'
									className='object-cover aspect-square rounded-sm group-hover:scale-110 group-hover:brightness-90 transition-all duration-1000'
								/>
							</div>
							<h3 className='text-lg'>Треки під гіпсокартон</h3>
						</Link>
					</article>
					<article className='w-full h-full group'>
						<Link
							href='/catalog'
							className='w-full h-full flex flex-col gap-3'
						>
							<div className='relative w-full h-full aspect-square overflow-hidden'>
								<Image
									src='/test2.webp'
									alt='test'
									fill
									sizes='100%, 100%'
									className='object-cover aspect-square rounded-sm group-hover:scale-110 group-hover:brightness-90 transition-all duration-1000'
								/>
							</div>
							<h3 className='text-lg'>Треки під гіпсокартон</h3>
						</Link>
					</article>
					<article className='w-full h-full group'>
						<Link
							href='/catalog'
							className='w-full h-full flex flex-col gap-3'
						>
							<div className='relative w-full h-full aspect-square overflow-hidden'>
								<Image
									src='/test2.webp'
									alt='test'
									fill
									sizes='100%, 100%'
									className='object-cover aspect-square rounded-sm group-hover:scale-110 group-hover:brightness-90 transition-all duration-1000'
								/>
							</div>
							<h3 className='text-lg'>Треки під гіпсокартон</h3>
						</Link>
					</article>
					<article className='w-full h-full group'>
						<Link
							href='/catalog'
							className='w-full h-full flex flex-col gap-3'
						>
							<div className='relative w-full h-full aspect-square overflow-hidden'>
								<Image
									src='/test2.webp'
									alt='test'
									fill
									sizes='100%, 100%'
									className='object-cover aspect-square rounded-sm group-hover:scale-110 group-hover:brightness-90 transition-all duration-1000'
								/>
							</div>
							<h3 className='text-lg'>Треки під гіпсокартон</h3>
						</Link>
					</article>
					<article className='w-full h-full group'>
						<Link
							href='/catalog'
							className='w-full h-full flex flex-col gap-3'
						>
							<div className='relative w-full h-full aspect-square overflow-hidden'>
								<Image
									src='/test2.webp'
									alt='test'
									fill
									sizes='100%, 100%'
									className='object-cover aspect-square rounded-sm group-hover:scale-110 group-hover:brightness-90 transition-all duration-1000'
								/>
							</div>
							<h3 className='text-lg'>Треки під гіпсокартон</h3>
						</Link>
					</article>
					<article className='w-full h-full group'>
						<Link
							href='/catalog'
							className='w-full h-full flex flex-col gap-3'
						>
							<div className='relative w-full h-full aspect-square overflow-hidden'>
								<Image
									src='/test2.webp'
									alt='test'
									fill
									sizes='100%, 100%'
									className='object-cover aspect-square rounded-sm group-hover:scale-110 group-hover:brightness-90 transition-all duration-1000'
								/>
							</div>
							<h3 className='text-lg'>Треки під гіпсокартон</h3>
						</Link>
					</article>
				</section>
			</Container>
		</motion.div>
	)
}
