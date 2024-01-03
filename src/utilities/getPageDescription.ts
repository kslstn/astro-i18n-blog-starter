import removeMd from 'remove-markdown'

const getFirstSentence = function(s){
	const regexp = /(^.*?[a-z]{2,}[.!?]+)\s+\W*[A-Z]/gm
	const matches = s.matchAll(regexp);
	let result = ''
	for (const match of matches) {
		result = match[1]
		break
	}
	return result
}

export function truncateDescription(description:string){
	if (!description) return ''
	const maxNumberOfWords = 22
	if (description.split(" ").length > maxNumberOfWords){
		description = `${description.split(" ").splice(0,maxNumberOfWords).join(" ")} …`
	}
	if (description.length > 150) description = `${description.substring(0, 150)} …`
	return description
}

export function getPageDescription(page){
	// Unlike for getPostDescription(), here we don't attempt to get the first sentence. The body may be to short for it.
	return (typeof page.rawContent() === 'undefined') ? '' : truncateDescription(removeMd(page.rawContent()))
}

export function getPostDescription(post){
	if (post) return post.data.description === '' ? truncateDescription(getFirstSentence(removeMd(post.body))) : truncateDescription(post.data.description)
	return ''
}
