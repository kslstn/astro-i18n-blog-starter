import type { PersonData } from '@src/people'
import slugify from '@sindresorhus/slugify';
import getPagePath from '@src/utilities/getPagePath';
import { directoryNames } from '@i18n/i18n';
import { peopleData } from '@src/people';

export interface Person extends PersonData {
 fullName: string,
 id: string
}

const getFullName = function(person: PersonData){
	let fullName = person.givenName
	if (person.surName) fullName += ` ${person.surName}`
	if (!fullName) throw new Error('Person needs at least a given name or surname.')
	fullName = fullName.trim()
	return fullName
}

export const people = peopleData
	.filter(person =>{ return person.publishProfile !== false})
	.map(person => ({ ...person, fullName: getFullName(person) }))
	.map(person => ({ ...person, id: slugify(person.fullName) }))

export const getPersonPath = (locale: string, id: string, addLeadingSlash: boolean = true) => {
  const directories = [directoryNames.people[locale]]
  return getPagePath(locale, directories, id, addLeadingSlash)
}