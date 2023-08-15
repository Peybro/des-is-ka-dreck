import { writable } from 'svelte/store';

type Product = {
	title: string;
	price: number;
	content: string;
	img: string;
};

export const products = writable([
	{
		title: 'Wien für Fortgeschrittene Deppen',
		price: 24.95,
		content: '<h4>Ein Guide für die Stadt der Kultur</h4>',
		img: 'wien.png'
	},
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
		content:
			'<p>Du willst nach Innsbruck reisen, aber du hast keine Ahnung, was dich dort erwartet? Kein Problem, wir haben den perfekten Reiseführer für dich:</p> <h4>"Innsbruck für Depperl - Ein humorvoller Guide für die Stadt der Berge</h4><p>In diesem Buch erfährst du alles, was du über Innsbruck wissen musst, von den besten Sehenswürdigkeiten über die leckersten Spezialitäten bis hin zu den lustigsten Aktivitäten.</p><p>Außerdem verraten wir dir, wie du dich mit den Einheimischen anfreundest, ohne dich zum Affen zu machen.</p><h3>Und das Beste:</h3><p>Dieser Reiseführer ist eine Hommage an unseren lieben Freund und Innsbruck-Laie, der uns immer wieder mit seinen Geschichten zum Lachen bringt.</p><br/><p>Also, worauf wartest du noch? Schnapp dir dieses Buch und mach dich auf den Weg nach Innsbruck - die Stadt der Berge und des Humors!</p>',
		img: 'innsbruck-für-depperl.png'
	},
	{
		title: 'Salzburg für Profi Depperl',
		price: 24.95,
		content: '<h4>Die Stadt der Musik</h4>',
		img: 'salzburg.png'
	}
] as Product[]);

export const cart = writable([] as Product[]);
