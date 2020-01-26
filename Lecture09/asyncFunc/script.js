let count = 0;

window.onload = function () {
    
    let btnWait = document.getElementById('btnWait');
    let btnBadWait = document.getElementById('btnBadWait');
    let btnCount = document.getElementById('btnCount');
    let divResult = document.getElementById('divResult');

    btnCount.onclick = function () {
        count = count + 1;
        console.log('count ' + count);
    }

    btnBadWait.onclick = function () {
        let start = new Date().getTime();
        while(new Date().getTime() - 5000 < start ) {

        }
    }

    btnWait.onclick = function () {
        divResult.innerText = 'WAITING';
        console.log(new Date().getTime());

        setTimeout(() => {
            console.log(new Date().getTime());
            divResult.innerText = 'DONE';
          }, 5000);
    }
}