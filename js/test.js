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
	answers: ['Кусаю локти', 'Бросаю все и ухожу доить Буренку потому что биток уже по 10, а нет -  по 8, хотя уже по 12', 'Показываю свой холодный и горячий'],
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
},
{
	question: 'Серьезные майнеры отличаются...',
	answers: ['Высоким ростом', 'Высоким уровнем интеллекта', 'Высокими затратами на электроэнергию'],
	illustration: 'img/mining-fermer.jpg',
	value: [1, 2, 3]
},
{	question: 'Что такое Bitcoin?',
	answers: ['Это пузырь', 'Это пирамида', 'Это дебильный вопрос!'],
	illustration: 'img/piramida.jpg',
	value: [1, 2, 3]
},
{
	question: 'Где лучший ассортимент видеокарт?',
	answers: ['В гипермаркете - «Лучший ассортимент видеокарт»', 'У невнятного барыги Валеры', 'Свой вариант'],
	illustration: 'img/gpu.jpg',
	value: [1, 2, 3]
},
{
	question: 'Что такое ICO?',
	answers: ['Игра для PlayStation', 'Геморрой', 'Способ заработать'],
	illustration: 'img/ico.jpg',
	value: [1, 2, 3]
},
{
	question: 'Вам понравился тест?',
	answers: ['Да', 'Да', 'Да'],
	illustration: 'img/test-over.jpg',
	value: [1, 2, 3]
}
];

var testResult =[
{
	title:'Твой результат:',
	resultsName: 'Настя',
	description: 'Ты не ответил ни на один вопрос. Поздравляем - Ты Настя!',
	illustration: 'img/nastya-result.jpg',
	tipTitle: 'Подсказка дня!',
	tipText: 'Используй площадку <a href="https://bitboard.trade/">bitboard.trade</a> для покупки или продажи любых услуг за Bitcoin. Да прибудет с тобой криптовалюта!'
},
{

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

}
];

var counter= 0;
var overallScore = 0;
var sumAllScores = 0;
var minScore = 0;
var maxScore = 0;
var testResultShow;


//preload images for better perfomance
for(var k = 0; k < testQuestions.length; k++){

	minScore = minScore + Math.min.apply(null, testQuestions[k].value),
	maxScore = maxScore + Math.max.apply(null, testQuestions[k].value);

	$('.preload').append('<img src="'+testQuestions[k].illustration+'">');
		for(var l=0; l<testQuestions[k].value.length; l++){

		sumAllScores = sumAllScores+testQuestions[k].value[l];
	}
}
for(var d = 0; d < testResult.length; d++){

	$('.preload').append('<img src="'+testResult[d].illustration+'">');

}

var resultsQuantity = testResult.length-1; //because 0 score is default 
var resultsInterval = Math.floor((maxScore - minScore)/resultsQuantity);


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
	$('.illustration').attr('src', testResult[testResultShow].illustration);
	$('.description').removeClass('hide').text(testResult[testResultShow].description).css('text-align', 'center');;
	$('.title').text(testResult[testResultShow].title);
	$('<div class="results-name-container text-center"><h2 class="results-name">'+testResult[testResultShow].resultsName+'</h2></div>').insertAfter('.title');
	$('.tip-jumbotron').append('<div class="jumbotron"><h3>'+testResult[testResultShow].tipTitle+'</h3><p>'+testResult[testResultShow].tipText+'</p></div>')

}
if(counter == testQuestions.length){

		$('.start-btn').text('Посмотреть результат');
}


if (counter>testQuestions.length) {

	if(overallScore==0){
		testResultShow = 0;
	}
	if(overallScore >= maxScore){
		testResultShow = testResult.length-1;
	}
	if(overallScore <= minScore){
		testResultShow = 1;
	}
	if(overallScore>minScore && overallScore < maxScore ){
		testResultShow = 2;
	}
	 testResultsShow();
}


});




//share popup window position
    $('.share-container ul li:not(:first-child) a').on('click', function () {

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

//copy-to-clipboard 
var linkToClipboard = window.location.href
$('.copy-to-clipboard').attr('data-clipboard-text', linkToClipboard)
new Clipboard('.copy-to-clipboard');

//tooltip
$('.copy-to-clipboard').tooltipster({
   animation: 'fade',
   delay: 200,
   theme: 'tooltipster-punk',
   trigger: 'click',
   maxWidth: 80,
   timer: 1000
});


console.log(resultsInterval)


