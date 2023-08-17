import type { Author, Product } from '$lib/types';

export const load = () => {
	return {
		title: 'Des is ka Dreck!',
		products: [
			{
				title: 'Wien für Fortgeschrittene Deppen',
				price: 34.99,
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
				price: 39.99,
				content: '<h4>Die Stadt der Musik</h4>',
				img: 'salzburg.png'
			}
		] as Product[],
		authors: [
			{
				name: 'Timo H.',
				mail: 'timofeeee@desiskadreck.de',
				img: { extern: false, src: 'timo.png' },
				bio: '<p><i>- Geboren als Mann, entwickelt zum ultimativen Skispringer.</i></p><p>Er wurde Ende des 18. Jahrhunderts in der <a href="https://www.google.de/maps/place/Telemark,+Norway/@59.4151535,8.5013811,7z/data=!3m1!4b1!4m6!3m5!1s0x4638abff0780bcc9:0x301772628b31c90!8m2!3d59.3913985!4d8.3211209!16zL20vMDE3bjlf?entry=ttu">norwegischen Provinz Telemark</a> geboren, wo er mit 5 Jahren den ersten Skisprung in der Weltgeschichte absetzte. In den Anfängen sprang er hier noch über größere Schneehügel. Entwickelte dann aber seine Technik schnell weiter und sprang über schneebedeckte Holzhaufen und Schäunendächer.</p><p>Nach kurzer Zeit zog er so viele Touristen nach Telemark, dass die Österreicher auf ihn aufmerksam wurden und ihn ein Angebot machten, dass er mit seinen jungen 12 Jahren nicht ablehnen konnte.</p><p>Die Herrschaften aus Innsbruck setzten ihm das Ultimatum, dass er den größten und weitesten Sprung der Weltgeschichte vor den Augen einer riesigen Zuschauer Masse hinlegen musste, um ein Preisgeld von <b>1ner Septillionen Schilling</b> zu erhalten. Innerhalb der nächsten 6 Jahre Trainierte er im außen Gelände im tiefsten Schnee von Innsbruck mit Wölfen und Rehen, um den stärksten, aber auch agilsten Sprung zu erlernen, den je ein Mensch auf der Welt gesehen hatte.</p><p>Am 02. Februar 1891 war es so weit und Timo wagte sich an den wohl krassesten Sprung in seiner Karriere. Den ersten Sprung landete er nur knapp und die Menge jubelte. Als er das Jubeln der Leute hörte gab er eine Zugabe, die die Leute vor Aufregung fast ins Grab brachte.</p><br /><h3>> "Da kommt er", schrie ein Mann in der Menge.</h3><br /><h3>> "Zeig uns den krassesten Trick!", schrie eine Frau aus der Meute und entblößte ihre beiden Germknödel.</h3><br /><p>Vor Spannung war die Luft schon so stark geladen, dass <span class="blitze">Blitze</span> den Himmel durchzogen!!!</p><p>Timo trat an die Skischanze, holte noch ein letztes Mal Luft und stoß! Mit knapp 150 Sachen bretterte er auf seinen Holzskiern die Schanze hinunter und zeigte der Welt den wohl krassesten Trick der Erde.</p><p>Der nach ihm benannte <b>"FAKIE, NOLLIE, SWITCH, LATE, BIG, Bigger FLIP mit MEHREREN FLIPS dazwischen"</b> <i>krass… Dafür finde sogar ich als Erzähler hier keine Worte.</i> Nachdem Timo den Trick landete, ließ er sich kurz bejubeln, holte die Septillionen Schillinge von der Bank ab und lebt bis heute Glücklich in seiner Badewanne voller Geld. Nebenbei brachte er sich selbst das Stricken bei.</p><h3>FIN</h3>'
			},
			{
				name: 'Wolfgang A. M.',
				mail: 'wolfgang-abi@desiskadreck.de',
				img: {
					extern: true,
					src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3f%2FWolfgang-amadeus-mozart_2.jpg&f=1&nofb=1&ipt=9e946c86a1633d17d66e686e8f0caffbb97e2b8593928417263e4c65a3c5c81d&ipo=images'
				},
				bio: '<p>Wolfgang Amadeus Mozart - Geboren als Mann, entwickelt zum ultimativen Komponisten.</p>'
			},
			{
				name: 'Thomas K.',
				mail: 'tommy-rulezz@desiskadreck.de',
				img: {
					extern: false,
					src: 'thomas.png'
				},
				bio: '<p><i>(in engeren Kreisen auch M.C. Cool, the Pimp)</i></p><p>- wurde in den späten 1990er Jahren geboren und war maßgeblich für das Ende des Kalten Krieges verantwortlich.</p><p>Schon in jungen Jahren erkannte er seine Liebe zur Österreichologie (<b>Austriakunde</b>, <i>nicht verwechseln mit dem Kunden/ der Kundin von Austern</i>) und hat mit bereits 7 Jahren das heute als Snowboard (damals noch "Crewslider") bekannte Wintersportgerät erfunden.</p><p>Heute lebt er als freier Studierender und schreibt <a href="/produkte">Sachbücher für Dummies</a>.</p>'
			},
			{
				name: 'Danilo M.',
				mail: 'capital.dan357@desiskadreck.de',
				img: {
					extern: true,
					src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fdefault-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392%3Fk%3D6%26m%3D1223671392%26s%3D170667a%26w%3D0%26h%3DzP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU%3D&f=1&nofb=1&ipt=21a1cd9539b9128ec015beed651c4a6e7e27a586455abcd7143001b6f1abb568&ipo=images'
				},
				bio: '- nett.'
			}
		] as Author[]
	};
};
