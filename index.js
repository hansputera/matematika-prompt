let ops;

/**
  - generateAngka()
  - Membuat pertanyaan
**/

function generateAngka() {
 let doc = document.getElementById('question');
 
 let a1 = Math.floor(Math.random() * 100);
 let a2 = Math.floor(Math.random() * 120);
 
 let operator = ['+','/','*','-'];
 let randomOperator = Math.floor(Math.random() * operator.length);
 
 let computer = `${a1}${operator[randomOperator]}${a2}`;
 let computerInt = parseInt(computer);
 
 let out = eval(computerInt);
 
 doc.value = computer;
 ops = out;
};

/**
  - answerQ()
  - Sebuah function yang dimana menyesuaikan soal dan jawaban
**/

function answerQ () {
 let val = document.getElementById('answer');
 
 if (val === '') { alert('Mohon jawab dulu!'); generateAngka(); }
 
 if (val === ops) { alert('Jawaban kamu benar!\nMembuat pertanyaan baru lagi..'); generateAngka(); }
}

/**
 - endMath()
 - Mengakhiri permainan
**/

function endMath() 
{
 alert('Mengakhiri permainan dalam 5 detik lagi.');
 setTimeout(() => {
  document.write('<pre> Game sudah diakhiri! </pre>');
 }, 5 * 1000);
}
