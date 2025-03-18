'use client'

import { Dialog, DialogContext } from '@/components/ui/dialog'
import { FileInput } from '@/components/ui/file-input'
import { useEditCategory } from '@/hooks/useCategories'
import { Category } from '@prisma/client'
import { useQueryClient } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface Props {
	category: Category
}

interface Form {
	image: FileList
	nameUa: string
	nameRu: string
}

export function AdminEditCategory({ category }: Props) {
	const [loadingToastId, setLoadingToastId] = useState('')
	const queryClient = useQueryClient()
	const { register, handleSubmit, setValue } = useForm<Form>()
	const { mutateAsync: editFunc, isPending, isSuccess, isError } = useEditCategory()
	const dialogContextValues = useContext(DialogContext)
	const closeDialog = dialogContextValues?.closeDialog

	useEffect(() => {
		if (isPending) {
			const loadingToastId = toast.loading('Триває зміна...')
			setLoadingToastId(loadingToastId)
		}
		if (isSuccess) {
			loadingToastId && loadingToastId && toast.dismiss(loadingToastId)
			queryClient.invalidateQueries({ queryKey: ['categories get'] })
			closeDialog?.()
		}
		if (isError) {
			loadingToastId && loadingToastId && toast.dismiss(loadingToastId)
			closeDialog?.()
		}
	}, [isPending, isSuccess, isError])

	const edit = async (data: Form) => {
		await editFunc({
			id: category.id,
			nameUa: data.nameUa ?? undefined,
			nameRu: data.nameRu ?? undefined,
			image: data.image ?? undefined
		})
	}

	return (
		<Dialog
			title='Змінити категорію'
			trigger={<button className='text-blue-600 hover:text-blue-900'>Редагувати</button>}
		>
			<form
				className='mx-auto bg-white rounded-md p-4 w-[400px] h-min flex flex-col gap-8 max-sm:w-[90%]'
				onSubmit={handleSubmit(data => edit(data))}
			>
				<div>
					<FileInput
						label='Зображення'
						multiple={false}
						accept='image/*'
						onChange={file => {
							if (file) {
								setValue('image', file)
							}
						}}
					/>
				</div>
				<div className='flex items-start flex-col gap-3'>
					<label
						htmlFor='cat'
						className='flex items-center gap-2'
					>
						Назва (укр)
					</label>
					<input
						className='w-full rounded-md border border-gray-500 bg-white px-5 py-3 text-sm placeholder:text-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500;'
						type='text'
						placeholder='Категорія'
						id='cat'
						defaultValue={(category.name as any).ua}
						{...register('nameUa')}
					/>
				</div>
				<div className='flex items-start flex-col gap-3'>
					<label
						htmlFor='cat'
						className='flex items-center gap-2'
					>
						Назва (рус)
					</label>
					<input
						className='w-full rounded-md border border-gray-500 bg-white px-5 py-3 text-sm placeholder:text-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500;'
						type='text'
						defaultValue={(category.name as any).ru}
						placeholder='Категорія'
						id='cat'
						{...register('nameRu')}
					/>
				</div>
				<button
					type='submit'
					className='bg-gray-800 text-white w-min px-12 py-2 rounded-md mx-auto hover:bg-gray-700'
				>
					Зберегти
				</button>
			</form>
		</Dialog>
	)
}
