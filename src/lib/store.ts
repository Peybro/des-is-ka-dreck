import { writable } from 'svelte/store';

type Product = {
	title: string;
	price: number;
	content: string;
	img: string;
};

export const products = writable([
	{
		title: 'Handbuch für medizinische Fußpflege',
		price: 79.99,
		content:
			'<p>Podologiewissen kompakt<p><p>Leicht verständlich und gut illustriert vermittelt der Titel die Basics der podologischen Behandlung: Praxismanagement, Patientenkommunikation sowie ergänzende spezielle Techniken und Spezialverbände.</p><br><p>Kompakt und übersichtlich:</p><ul><li>fundiertes Wissen um Fuß und Pflege</li><li>eindrucksvolles Bildmaterial, insbesondere zu krankhaften Veränderungen</li><li>Abdeckung aller Inhalte der Ausbildungsordnung Podologie</li></ul><br><p>Dieses Handbuch ist "aus der Praxis für die Praxis" entstanden. Es richtet sich nicht nur an Podologen sondern auch an alle, die im Bereich der medizinischen Fußpflege bzw. Fußbehandlung tätig sind. Das versierte Autorenteam setzt sich überwiegend aus Dozenten der Schule für Podologie in Neuenbürg zusammen.</p>',
		img: 'fußpflege.png'
	},
	{
		title: 'Innsbruck für Depperl',
		price: 24.95,
		content: '<p>Test 2</p>',
		img: 'innsbruck-für-depperl.png'
	}
] as Product[]);

export const cart = writable([] as Product[]);
