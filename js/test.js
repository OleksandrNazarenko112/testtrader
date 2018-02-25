var testTitle = {

	title: 'Пройди тест и узнай какой ты крипто трейдер.',
	description: 'Этот тест создан с помощью секретной нейронной блокчейн сети с целью выявления наиболее эффективных трейдеров и похищением их для дальнейших экспериментов. Внимание вы проходите его на свой страх и риск! Чтоб начать тест нажмите большую красную кнопку.',
	illustration: 'img/illustration-to-first-page.jpg'
};

var testQuestions = [

{
	question: 'Если быки побеждают медведей, обычно я:',
	answers: ['Покупаю ', 'Продаю', 'Прекращаю пить и иду домой спать'],
	illustration: 'img/medvedi.jpg',
	value: [1, 2, 3]
},
{
	question: 'Лучшие сигналы ...',
	answers: ['На сверх секретном канале в Telegram', 'В группе “Ебучий случай”', 'В автомастерской у Ашота'],
	illustration: 'img/ashot.jpg',
	value: [1, 2, 3]
},
{
	question: 'Когда я слышу что заниматься криптой уже поздно:',
	answers: ['Я показываю свой холодный и горячий', 'Кусаю локти', 'Бросаю все и ухожу доить Буренку потому что биток уже по 10, а нет -  по 8, хотя уже по 12'],
	illustration: 'img/cold-and-hot.jpg',
	value: [1, 2, 3]
},
{
	question: 'Что тебе больше нравиться?',
	answers: ['Bitcoin', 'Etherium', 'Z- cash', 'Ripple', 'Светлое нефильтрованное'],
	illustration: 'img/what-curency-do-you-like-more.jpg',
	value: [1, 2, 3, 4, 5]
},
{
	question: 'Куда лучше вкладывать крипту?',
	answers: ['Хранить на холодном кошельке', 'Покупать и продавать разные монеты', 'Я крипту вкладываю в Настю'],
	illustration: 'img/Nastya.jpg',
	value: [1, 2, 3]
},
{
	question: 'Что изображено на этой картинке?',
	answers: ['График изменения курсов за последние 12 месяцев', 'График изменения курсов за последние 24 месяца', 'График изменения курсов за последние 6 месяцев', 'Настя'],
	illustration: 'img/graph.jpg',
	value: [1, 2, 3, 4]
},
{
	question: 'Сатоши Накамото это...',
	answers: ['Порно актер', 'Название японского виски', 'Создатель Bitcoin'],
	illustration: 'img/satoshi-nakamoto.jpg',
	value: [1, 2, 3]
},
{
	question: 'Что лучше AMD или Nvidia?',
	answers: ['AMD'],
	illustration: 'img/amd.jpg',
	value: [1]
},
{
	question: 'Петро это... ',
	answers: ['Крипта', 'Имя владельца шоколадной фабрики', 'Компьютерный вирус'],
	illustration: 'img/petro.jpg',
	value: [1, 2, 3]
},
{
	question: 'Если John McAfee не съест свой член то...',
	answers: ['Я не интересуюсь членами', 'Я буду богатым человеком', 'Не понял про член! Требую объяснений!!!'],
	illustration: 'img/eat-dick.png',
	value: [1, 2, 3]
}


];
var testResult =[{

	title: 'Твой результат:',
	resultsName: 'Восходящая криптозвезда!', 
	description: 'Твое чутье способно принести тебе миллионы! Рокфеллер будет тебе завидовать!',
	illustration: 'img/rising-star.jpg',
	tipTitle: 'Подсказка дня!',
	tipText: 'А ты знал что не обязательно торговать на бирже или майнить чтоб получить Bitcoin? Достаточно продать любой товар на площадке <a href="https://bitboard.trade/">bitboard.trade</a> и у тебя в «кармане» самая дорогая криптовалюта!'

},
{
	title:'Твой результат:',
	resultsName: 'Криптоволк!', 
	description: 'Шумные пати и дорогие тачки тебе уже не интересны. Ты готов создать собственную крипто империю и покорить весь мир!',
	illustration: 'img/vorotila.jpg',
	tipTitle: 'Подсказка дня!',
	tipText: 'А ты знал что не обязательно торговать на бирже или майнить чтоб получить Bitcoin? Достаточно продать любой товар на площадке <a href="https://bitboard.trade/">bitboard.trade</a> и у тебя в «кармане» самая дорогая криптовалюта!'
},
{
	title:'Твой результат:',
	resultsName: 'Великий папа!',
	description: 'Виталик Бутерин и Сатоши Накамото в сравнении с тобой просто никто! Твой гений способен покупать целые страны и покорять планеты.',
	illustration: 'img/god-father.jpg',
	tipTitle: 'Подсказка дня!',
	tipText: 'А ты знал что не обязательно торговать на бирже или майнить чтоб получить Bitcoin? Достаточно продать любой товар на площадке <a href="https://bitboard.trade/">bitboard.trade</a> и у тебя в «кармане» самая дорогая криптовалюта!'

},

{
	title:'Твой результат:',
	resultsName: 'Настя',
	description: 'Ты не ответил ни на один вопрос. Поздравляем - Ты Настя!',
	illustration: 'img/nastya-result.jpg',
	tipTitle: 'Подсказка дня!',
	tipText: 'Используй площадку <a href="https://bitboard.trade/">bitboard.trade</a> для покупки или продажи любых услуг за Bitcoin. Да прибудет с тобой криптовалюта!'
}
];

var counter= 0
var overallScore = 0



$('.title').text(testTitle.title);
$('.description').text(testTitle.description);
$('.illustration').attr('src', testTitle.illustration);

$('.start-btn').on('click', function(){
		counter++;
	var questionIndex = counter-1;
	if(counter==1){
		$('	<ul class="question-items"></ul>').insertAfter('.title')
	}

	if(questionIndex < testQuestions.length){
		$('.question-items li').empty();

	
		$('.start-btn').removeClass('btn-danger').addClass('btn-success').text('Следующий вопрос');
		$('.description').addClass('hide');

		$('.title').text(testQuestions[questionIndex].question);
		$('.illustration').attr('src', testQuestions[questionIndex].illustration);

			for(var i =0; i < testQuestions[questionIndex].answers.length; i++){
 				$('.question-items').append('<li><div class="radio"><input type="radio" name="radio" id="radio'+i+'" value="'+testQuestions[questionIndex].value[i]+'"><label for="radio'+i+'">'+testQuestions[questionIndex].answers[i]+'</label></div></li>');
					}


$('input:radio[name="radio"]').change(
    function(){
		
		overallScore = parseInt($( "input:checked" ).val()) + parseInt(overallScore);
		
    });

}

function testResultsShow() {
	$('.start-btn').addClass('hide');
	$('.question-items').addClass('hide');
	$('.title').css({'height': 'auto','padding-bottom': '20px'});
	$('.share-container').show();

}

if(counter>testQuestions.length & overallScore==0){
	testResultsShow();
	$('.illustration').attr('src', testResult[3].illustration);
	$('.description').removeClass('hide').text(testResult[3].description).css('text-align', 'center');;
	$('.title').text(testResult[3].title);
	$('<div class="results-name-container text-center"><h2 class="results-name">'+testResult[3].resultsName+'</h2></div>').insertAfter('.title');
	$('.tip-jumbotron').append('<div class="jumbotron"><h3>'+testResult[3].tipTitle+'</h3><p>'+testResult[3].tipText+'</p></div>')

}
if(counter>testQuestions.length & overallScore > 0){
	testResultsShow();
	$('.illustration').attr('src', testResult[1].illustration);
	$('.description').removeClass('hide').text(testResult[1].description).css('text-align', 'center');;
	$('.title').text(testResult[1].title);
	$('<div class="results-name-container text-center"><h2 class="results-name">'+testResult[1].resultsName+'</h2></div>').insertAfter('.title');
	$('.tip-jumbotron').append('<div class="jumbotron"><h3>'+testResult[1].tipTitle+'</h3><p>'+testResult[1].tipText+'</p></div>')

}
});


//preload images for better perfomance
for(var k = 0; k < testQuestions.length; k++){

	$('.preload').append('<img src="'+testQuestions[k].illustration+'">');

}
for(var d = 0; d < testResult.length; d++){

	$('.preload').append('<img src="'+testResult[d].illustration+'">');

}

//share window position
    $('.share-container ul li a').on('click', function () {

        var w = 500, h = 500,
        left = (screen.width / 2) - (w / 2);
        popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=100, left=' + left);
        popupWindow.focus();
        return false;


    })
//Btc rate
    $.getJSON('https://blockchain.info/ru/ticker', function(data){

		$('header p span').text(data.USD.sell.toFixed(2)+' USD');

	});

