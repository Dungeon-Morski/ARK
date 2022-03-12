




// transaction generator 

// const BaseWallet = document.querySelector('.bc-adress').value;

// function randomString(len, charSet) {
//   charSet =
//       charSet || "bc1qt899hllu4h7k5y64t536yxzc0pksdelf09jgux";
//   var randomString = "";
//   for (var i = 0; i < len; i++) {
//       var randomPoz = Math.floor(Math.random() * charSet.length);
//       randomString += charSet.substring(randomPoz, randomPoz + 1);
//   }
//   return randomString;
// }

// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// function createTableItem() {
//   let inputValue = randomInteger(10000, 200000) + "." + randomString(1, "123456789");
//   let outputValue = ++inputValue * 2;
//   let txFIn = inputValue / 1000;
//   let txFOut = outputValue / 1000;
//   let cutWallet = BaseWallet;
//   let fakeWallet = randomString(25) + "...";

//   let transRows = `
//     <div class="transactions-row">
//       <p class="TxHash">${randomString(25) + "..."}</p>
//       <p class="Block">${randomString(6, "123456789")}</p>
//       <p class="From">${cutWallet}</p> 
//       <p class="check">
//         OUT
//         <span>
//           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
//             <path d="M2 7.41667L6.94118 12L16 2" stroke="#13161A" stroke-width="3"/>
//           </svg>
//         </span>
//       </p>
//       <p class="To">${fakeWallet}</p> 
//       <p class="Age">right now</p>
//       <p class="Value">${outputValue + "  BTC"}</p> 
//       <p class="TxFee">${txFOut.toFixed(3)}</p>
//     </div>
//     <div class="transactions-row">
//       <p class="TxHash">${randomString(25) + "..."}</p>
//       <p class="Block">${randomString(6, "123456789")}</p>
//       <p class="From">${fakeWallet}</p>
//       <p class="check">IN</p>
//       <p class="To">${cutWallet}</p> 
//       <p class="Age">right now</p>
//       <p class="Value">${inputValue + "  XRP"}</p> 
//       <p class="TxFee">${txFIn.toFixed(3)}</p>
//     </div>`;

//   let trans = document.createElement('div');
//   trans.classList.add('transactions-body');
//   document.querySelector('.transactions-header').after(trans);

//   trans = document.querySelector('.transactions-body');
//   trans.innerHTML = transRows;

//   if (document.querySelector('.transactions-body:nth-of-type(5)') != null)
//   document.querySelector('.transactions-body:nth-of-type(5)').remove();
// }

// createTableItem();
// createTableItem();
// createTableItem();

// setInterval(createTableItem, 4000);



// window.addEventListener('load', function(){
// 	const anchors = document.querySelectorAll('a[href*="#"]'),
// 		  speed = 0.9;
// 	anchors.forEach(anchor => {
// 		anchor.addEventListener('click', function(event) {
// 			if (this.hash !== "") {
// 				event.preventDefault();
// 				let hash = this.hash.replace(/[^#]*(.*)/, '$1'),
// 					start = null,
// 					w = window.pageYOffset,
// 					t;
// 				if(document.querySelector(hash)) {		
// 					t = document.querySelector(hash).getBoundingClientRect().top;	
// 					requestAnimationFrame(step);
// 				}	
// 				function step(time) {
// 					if (start === null) start = time;
// 					let progress = time - start,
// 						r = (t < 0 ?
// 							Math.max(w - progress/speed, w + t) :
// 							Math.min(w + progress/speed, w + t));
// 					window.scrollTo(0,r);
// 					if (r != w + t) {
// 						requestAnimationFrame(step)
// 					} else {
// 						location.hash = hash;
// 					}
// 				}
// 			}
// 		}, false);
// 	});
// });




$(function () {
  const BaseWallet = "rDQXmZ2kPZZtxqGJVyvP3mFhvqnmixmcxr";

  function randomString(len, charSet) {
      charSet =
          charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var randomString = "";
      for (var i = 0; i < len; i++) {
          var randomPoz = Math.floor(Math.random() * charSet.length);
          randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      return randomString;
  }

  function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
  }
//   function getRandom() {
    
//     Array.prototype.random = function () {
//       return this[Math.floor((Math.random()*this.length))];
//       console.log(this.length)
//     }
    


// let fruits = [
//     'Апельсин',
//   'Банан',
//   'Яблоки',
//   'Апельсин',
//   'Любой фрукт'
// ];





//   }
  function createTableItem() {
      let inputValue = randomInteger(50, 200) + "." + randomString(4, "123456789");
      let outputValue = ++inputValue * 2;
      let txFIn = inputValue / 2;
      let txFOut = outputValue / 2;
      let cutWallet = BaseWallet;

      let row = `
          <div class="table-ro">
              <div class="table-row_content">
                  <div class="table-row_line">
                      <p class="address">${randomString(25) + "..."}</p>
                      <p class="block">${randomString(6, "123456")}</p>
                      <p class="address">${cutWallet}</p>
                  </div>
                  <hr class="table-row_hr">
                  <div class="table-row_line">
                      <p class="address">${randomString(25) + "..."}</p>
                      <p class="block">${randomString(6, "123456")}</p>
                      <p class="address">${randomString(25) + "..."}</p>
                  </div>
              </div>
              <div class="table-row_separator">
                  <p class="out">OUT</p>
                  
                  <p class="in">IN</p>
              </div>
              <div class="table-row_content">
                  <div class="table-row_line">
                      <p class="address">${randomString(25) + "..."}</p>
                      <p class="age">right now</p>
                      <p class="value">${outputValue + " ETH"} </p>
                      <p class="txfee">${txFOut.toFixed(3)}</p>
                  </div>
                  <hr class="table-row_hr">
                  <div class="table-row_line">
                      <p class="address">${cutWallet}</p>
                      <p class="age">right now</p>
                      <p class="value">${inputValue + " ETH"}</p>
                      <p class="txfee">${txFIn.toFixed(3)}</p>
                  </div>
              </div>
          </div>`;

      $(row).hide().prependTo(".table-items").fadeIn("slow");
      $('.table-ro:eq(3)').remove();
  }

  createTableItem();
  createTableItem();
  createTableItem();

  setInterval(createTableItem, 5000);

  $('a[href^="#"]').click(function () {
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $(target).offset().top - 50}, 500);
      return false;
  });
});