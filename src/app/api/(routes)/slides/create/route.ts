import { ApiError } from '@/app/api/exceptions/apiError'
import { handleApiError } from '@/app/api/exceptions/handleApiError'
import { saveFile } from '@/app/api/utils/saveFile'
import { prisma } from '@/prisma/prisma-client'
import Joi from 'joi'
import { NextRequest, NextResponse } from 'next/server'
import { checkIsAdmin } from '../../admin/auth/utils/checkIsAdmin'

const slideSchema = Joi.object({
	text: Joi.string().min(1).required().messages({
		'string.empty': 'Text is required',
		'any.required': 'Text is required'
	}),
	url: Joi.string().min(1).required().messages({
		'string.empty': 'Url is required',
		'any.required': 'Url is required'
	}),
	description: Joi.string().min(1).required().messages({
		'string.empty': 'Description is required',
		'any.required': 'Description is required'
	}),
	locale: Joi.string().valid('uk', 'ru').default('uk').messages({
		'string.empty': 'Locale is required',
		'any.only': 'Locale must be either "uk" or "ru"'
	})
})

export async function POST(req: NextRequest) {
	try {
		const formData = await req.formData()
		const body = Object.fromEntries(formData)

		const productInfo = JSON.parse(body.info as string)
		const background = formData.get('background') as File

		const { error, value } = slideSchema.validate(productInfo, { abortEarly: false })

		if (error) {
			const errorDetails = error.details.map(err => err.message).join(', ')
			throw new ApiError(`Validation error: ${errorDetails}`, 400)
		}

		let savedImage: string = ''

		if (background && background.type?.startsWith('image/')) {
			const savedPath = await saveFile(background, req)
			savedImage = savedPath
		} else {
			throw new ApiError('Each image must be of type image/*', 400)
		}

		value.background = savedImage

		const isAdmin = await checkIsAdmin(req)
		if (!isAdmin) throw new ApiError('You are not admin', 403)

		const slide = await prisma.slide.create({ data: value })

		return NextResponse.json(
			{ ok: true, slide },
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
	} catch (error) {
		return handleApiError(error)
	}
}
