import slugify from '@sindresorhus/slugify';
import getPagePath from '@src/utilities/getPagePath';
import { directoryNames } from '@i18n/i18n';
import { peopleData } from '@src/people';

const getFullName = function(person){
	let fullName = person.givenName ? person.givenName : ''
	if (person.surName) fullName += ` ${person.surName}`
	if (!fullName) {
		console.error('Person needs at least a given name or surname.')
		fullName = 'Person'
	}
	fullName = fullName.trim()
	return fullName
}

export const people = peopleData
	.filter(person =>{ return person.publishProfile !== false})
	.map(person => ({ ...person, fullName: getFullName(person) }))
	.map(person => ({ ...person, id: slugify(person.fullName) }))

export const getPersonPath = (locale:string, id:string, addLeadingSlash:boolean = true) => {
  const directories = [directoryNames.people[locale]]
  return getPagePath(locale, directories, id, addLeadingSlash)
}