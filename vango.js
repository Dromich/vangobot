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



bot.on('message', (msg) =>{

bot.sendMessage(msg.chat.id,'Яке ви хочете передбачення',{
	reply_markup:{
		inline_keyboard:[
			[
				{
					text:'Звичайне',
					callback_data:'simp'
			
				},
				{
					text:"Про любов 💕",
					callback_data:"love"
				}
			]
		]
		
	}

})//bot send mesage and keyboard
	


});



bot.on('callback_query',query =>{
	let counter = 0

	if (query.data === 'love') {
		counter = counter + 1
			bot.sendPhoto(query.message.chat.id, './love_is/love_is_'+ randomInteger(1,47) +'.jpg')
		
			bot.sendMessage(my_id, query.message.chat.username  + '\n' + 'Використав любовне передбачення');
	
	
			
		}else{
			counter = counter + 1
			bot.sendMessage(query.message.chat.id, query.message.chat.username  + '\n'+'Передбачення для вас:\n' + pools[randomInteger(1,91)] 
			+'\n \n' + "Для наступного передбачення зачекайте хочаб хвилинку та надішліть +\n\n\n" );
		
		bot.sendMessage(my_id, query.message.chat.username  + '\n' + 'Використав звичайне передбачення');
		
				
		}



	
  

// if (counter === 1) {

// 	bot.sendMessage(query.message.chat.id, query.message.chat.username + ', ' + ansvers[randomInteger(1,20)]);
// 	bot.sendMessage(my_id, query.message.chat.username  + '\n' + 'Не терплячий');

// }else{
	
// }

 




	//bot.answerCallbackQuery(query.id,`${query.data}`)

})

