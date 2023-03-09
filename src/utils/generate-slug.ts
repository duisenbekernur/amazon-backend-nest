export const generateSlug = (str: string): string => {
	const slug = str.replace(/[^\w\s]/gi, '').toLowerCase()

	return slug.replace(/\s+/g, '-')
}
