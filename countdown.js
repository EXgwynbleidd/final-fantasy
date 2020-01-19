

const getReaminTime = deadline => {
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime /60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime /( 3600 * 24));

    return{
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays
    }

};
console.log(getReaminTime('Thu Apr 10 2020 00:00:00'));

const countdown = (deadline, elem, fiinalMessage) =>{
    const el = document.getElementById(elem);

    const timerUpdate = setInterval( () => {
        let t = getReaminTime(deadline);
        el.innerHTML = `${t.remainDays}Days ${t.remainHours}h ${t.remainMinutes}m ${t.remainSeconds}s`;

        if(t.remainTime <= 1){
            clearInterval(timerUpdate)
            el.innerHTML = fiinalMessage;
        }

    },1000)
};

countdown('Thu Apr 10 2020 00:00:00', 'clock', 'HAPPYNESS IS HERE!!!');



    