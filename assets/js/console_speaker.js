console_style = "color: green;  font-size: 13px; text-align: center;";

function console_speaker( message ){

	styledConsoleLog( message );
	
}

function console_init(){
		console_speaker( `
	<span style="` + console_style + `">
    =============================
	 _______             _______
	|@|@|@|@|           |@|@|@|@|
	|@|@|@|@|   _____   |@|@|@|@|
	|@|@|@|@| /\\_T_T_/\\ |@|@|@|@|
	|@|@|@|@||/\\ T T /\\||@|@|@|@|
	 ~/T~~T~||~\\/~T~\\/~||~T~~T\\~
	  \\|__|_| \\(-(O)-)/ |_|__|/
	  _| _|    \\\\8_8//    |_ |_
	|(@)]   /~~[_____]~~\\   [(@)|
	  ~    (  |       |  )    ~
	      [~\` ]       [ '~]
	      |~~|         |~~|
	      |  |         |  |
	     _<\\/>_       _<\\/>_
	    /_====_\\     /_====_\\
  
	 ==============================

	 WELCOME TO THE OLD SCHOOL MODE

	 ==============================	

	      this is the console
	      type </span><span style="` + console_style + `font-style:italic;">help()</span><span style="` + console_style + `"> for list 
	       available commands
	            V 0.2.3

	 ==============================

         PLEASE TYPE "start()"
  
	 ==============================
	</span>` );
}



function start(){
	console_speaker( `
		<span style="` + console_style + `">

  Hello !

I am Tom Quinonero, a full-stack web developper based in Berlin, born in France. 
I code since i'm 14, so it's been 10 years !

I start learn coding by myself when I was young and at 20 I worked 2 years as a PHP developper.
That was very interessing and learn me the issues of a professionnal work environment.

Since I work hard on my skills and I'm a way better developper using mainly ruby on rails, my favorite framework.
</span><span style="font-weight:bold; ` + console_style + `">
I am available right now in Berlin for a job in back-end development. I would like to work with rails or laravel.
</span><span style="` + console_style + `">

For see my skills, type </span><span style="font-weight:bold; ` + console_style + `">skills()</span><span style="` + console_style + `">, for contact me type </span><span style="font-weight:bold; ` + console_style + `">contact()</span><span style="font-weight:bold;` + console_style + `">
		  </span>`);

}


function skills(){
	console.log('soon :)')
}

function contact(){
	console_speaker( `
		<span style="` + console_style + ` font-weight: normal">

		Hey

		I would be happy to be contacted.
		You can send me a mail at</span><span style="` + console_style + `">

		me@tomquinonero.com </span>
		<span style="` + console_style + ` font-weight: normal">
		I'm also available by phone :</span><span style="` + console_style + `">

		+491631555481
		</span><span style="` + console_style + ` font-weight: normal">
		
		Hope to heard from you

		</span><span style="` + console_style + ` color: red;">
		♥
		</span><span style="` + console_style + ` font-weight: normal">
		</span>`);
}


function help(){
	console_speaker( `
<span style="` + console_style + `">
help:

	infos()     infos about me
	skills()    list my skills
	contact()   my contact infos
	 </span>` );
	


}

function styledConsoleLog() {
    var argArray = [];

    if (arguments.length) {
        var startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi;
        var endTagRe = /<\/span>/gi;

        var reResultArray;
        argArray.push(arguments[0].replace(startTagRe, '%c').replace(endTagRe, '%c'));
        while (reResultArray = startTagRe.exec(arguments[0])) {
            argArray.push(reResultArray[2]);
            argArray.push('');
        }

        // pass through subsequent args since chrome dev tools does not (yet) support console.log styling of the following form: console.log('%cBlue!', 'color: blue;', '%cRed!', 'color: red;');
        for (var j = 1; j < arguments.length; j++) {
            argArray.push(arguments[j]);
        }
    }

    console.log.apply(console, argArray);
}

