const btnsale = document.getElementById("btnsale");
const saleprice = document.getElementById("saleprice");
const salecount = document.getElementById("salecount");
const btnremove = document.getElementById("btnremove");
btnsale.addEventListener("click", () => {
  salecount.innerText++;
  saleprice.innerText = 155 * salecount.innerText;
});
if (salecount.innerText >=1) {
    btnremove.addEventListener("click", () => {
        salecount.innerText -= 1;
        saleprice.innerText -= 155;
      });
}
