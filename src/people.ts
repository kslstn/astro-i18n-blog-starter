export type PersonData = {
	givenName: string
	surName?: string
	publishProfile?: boolean
	mail?: string
	mastodon?: string
	description: {
		[key: string]: string
	}
};

export const peopleData: PersonData[] = [
	{
		givenName: 'Ana', 
		surName: 'Grigoryan',
		publishProfile: true,
		mail: 'ana.g@example.com',
		mastodon: '@ana@weirdanimal.name',
		description: {
			en: 'Ana, an accomplished author with a passion for weaving tales that resonate with the human experience, brings a unique blend of literary artistry and insightful storytelling to her work. With a background in psychology and a keen interest in exploring the complexities of relationships, Jane crafts narratives that delve into the depths of emotion and challenge readers to reflect on the intricacies of the human condition. Her novels, known for their rich character development and thought-provoking themes, have earned critical acclaim and a devoted readership. Whether exploring the nuances of love, loss, or self-discovery, Jane Mitchell’s writing transcends genres, creating an immersive and memorable reading experience for those seeking narratives that both entertain and inspire.',
			de: 'Ana, eine erfahrene Autorin mit Leidenschaft für das Weben von Geschichten, die mit der menschlichen Erfahrung in Resonanz stehen, bringt eine einzigartige Mischung aus literarischer Kunstfertigkeit und einfühlsamem Geschichtenerzählen in ihre Werke ein. Mit einem Hintergrund in Psychologie und einem starken Interesse daran, die Komplexitäten von Beziehungen zu erforschen, erschafft Jane Erzählungen, die in die Tiefen der Emotionen eindringen und die Leser dazu herausfordern, über die Feinheiten der menschlichen Existenz nachzudenken. Ihre Romane, bekannt für ihre facettenreiche Charakterentwicklung und nachdenklichen Themen, haben kritische Anerkennung und eine treue Leserschaft erhalten. Ob sie die Nuancen von Liebe, Verlust oder Selbstfindung erforscht, übertrifft Janes Schreiben Genregrenzen und schafft eine immersive und unvergessliche Leseerfahrung für diejenigen, die nach Erzählungen suchen, die sowohl unterhalten als auch inspirieren.',
			nl: 'Ana, een ervaren auteur met een passie voor het weven van verhalen die resoneren met de menselijke ervaring, brengt een unieke mix van literaire kunst en inzichtelijk vertellen naar haar werk. Met een achtergrond in psychologie en een sterke interesse in het verkennen van de complexiteiten van relaties, creëert Jane vertellingen die diep ingaan op de emoties en lezers uitdagen om na te denken over de subtiliteiten van de menselijke conditie. Haar romans, bekend om hun rijke karakterontwikkeling en doordachte thema’s, hebben kritische lof en een toegewijde lezersschare verdiend. Of ze nu de nuances van liefde, verlies of zelfontdekking verkent, overstijgt het schrijven van Jane genres en biedt een meeslepende en gedenkwaardige leeservaring voor degenen die op zoek zijn naar verhalen die zowel vermaken als inspireren.'
		}
	},
	{
		givenName: 'Fatima', 
		surName: 'Rodríguez',
		publishProfile: true,
		mail: '',
		mastodon: '@fati@difficultword.social',
		description: {
			en: '',
			de: '',
			nl: '',
		}
	},
	{
		givenName: 'David', 
		surName: 'Müller',
		mail: 'dmueller@example.com',
		description: {
			en: '',
			de: '',
			nl: '',
		}
	},
	{
		givenName: 'Ashley',
		publishProfile: false,
		mail: 'ash@example.com',
		description: {
			en: '',
			de: '',
			nl: '',
		}
	}
]