async function load(){
	$('#photo').hide();
	$('#award_text').hide();
	let index = 1;
	$('#vorobey').attr("onclick", "#");
	let audio = new Audio('audio/together.mp3');
	audio.play();
	await sleep(3000);
	$('#count').show();
	for(let i = 3; i >= 1; i--){
		$('#count').html(i);
		await sleep(1500);
	}
	$('#count').hide();
	$('#title').html('Наша команда');
	$('#title').show();
	await sleep(3000);
	$('#title').hide();
	$('#1').show();
	$('#award_text').html(crue_texts[0]);
	$('#award_text').show();
	await sleep(5000);
	for(index = 1; index < crue_texts.length;){
		$('#' + index).hide();
		$('#' + ++index).show();
		$('#award_text').html(crue_texts[index-1]);
		await sleep(3000);
	}
	$('#' + crue_texts.length).hide();
	$('#award_text').html("Ура, товарищи!");
	$('#final').show();
	await sleep(2000);
	//audio.pause();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let enemies_texts = [
	'Васаби'
];

let awards_texts = [
	"1 Инста-конкурс. Устали..."
];

let crue_texts = [
	"Настя",
	"Стас",
	"Катя",
	"Вероника",
	"Полина",
	"Алёна",
	"Паша",
	"Даша",
	"Андрей",
	"Наташа",
	"Маша",
	"Андрей",
	"Лиза",
	"Никита",
	"Алёна"
];