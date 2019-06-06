const TelegramBot = require('node-telegram-bot-api') ;
const TOKEN =require('./tok.js');;
let pools = require('./strings.js');
let ansvers = require('./ansvers.js');
let ansvers_v= require('./ans_vit.js');
const my_id = 381624708;
const bot = new TelegramBot(TOKEN,{
	polling: true
} );
console.log("Boot started.....")
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  };

var user_time =[];


bot.on('message', (msg) =>{

var old_date =user_time[msg.chat.id];
var new_date=msg.date - old_date;

if (new_date <=80) {

	bot.sendMessage(msg.chat.id, msg.from.first_name + ', ' + ansvers[randomInteger(1,20)]);
		bot.sendMessage(my_id, msg.from.first_name  + '\n' + 'Не терплячий');	
	
}else{

	if (msg.from.first_name === 'Roman'||msg.from.first_name =='Виталік') {
		bot.sendMessage(msg.chat.id, msg.from.first_name + ', ' + ansvers_v[randomInteger(1,20)]);
		bot.sendMessage(msg.chat.id,  '\n'+'Передбачення для вас:\n' + pools[randomInteger(1,91)] 
		+'\n \n' + "Для наступного передбачення зачекайте хочаб хвилинку та надішліть +\n\n\n" );

		bot.sendMessage(my_id, msg.from.first_name  + '\n' + 'Спрацювало на віталіка');
		
	}else{
		
		bot.sendMessage(msg.chat.id, msg.from.first_name  + '\n'+'Передбачення для вас:\n' + pools[randomInteger(1,91)] 
		+'\n \n' + "Для наступного передбачення зачекайте хочаб хвилинку та надішліть +\n\n\n" );
	
		bot.sendMessage(my_id, msg.from.first_name  + '\n' + 'Use Vangobot');
	}

	
	
};

user_time[msg.chat.id]=msg.date;

//console.log(msg);
// console.log(user_time);
// console.log(new_date);

});