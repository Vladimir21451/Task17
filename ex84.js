function randomInteger(min, max) {
    // случайное число от min до (max+1)
    min=1;
    max=99;
    min = Math.ceil(min);
    max = Math.floor(max);
      let rand = Math.floor((Math.random() * (max - min + 1)) + min);
      alert('Ваше случайное число: ' + rand); 
     //return Math.floor(rand);
      var flag = true;
      if(rand % 2 !== 0){ flag = false}
      alert(flag); 

      const p = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (flag){
          resolve("Заверщено успешно. Сгенерированное число " + rand);}
          else{
          reject("Завершено с ошибкой. Сгенерированное число " + rand);}
        }, 3000);
      });
      
      p.then(data => {
        console.log(data);
      }).catch(err => {
        console.error(err);
      });

    }
 ;