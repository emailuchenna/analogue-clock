function createClock () {
    let deg1 = 30
    let deg2 = -30
    let num = 1;
    const innerCircle = document.querySelector("#inner-circle");
    for(let i = 0; i < 12; i++){
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.setAttribute("class", "numbers")
        div1.style.transform = `rotate(${deg1}deg)`;
        div1.appendChild(div2)
        div2.style.transform = `rotate(${deg2}deg)`;
        div1.style.position = "absolute";
        div2.textContent = num;
        deg1 += 30;
        deg2 -= 30;
        num++;
        innerCircle.appendChild(div1)
    }
}

createClock()

function startClock () {
    const minuteHand = document.querySelector("#min-hand");
    const secondHand = document.querySelector("#sec-hand");
    const hourHand = document.querySelector("#hour-hand");
    
    setInterval(render, 1000)
    function render () {
        const date = new Date()
        let sec = date.getSeconds() * 6;
        let min = date.getMinutes();
        let hr = date.getHours();
        let hdeg = hr*30 + min/2;
        secondHand.style.transform = `rotate(${sec}deg)`;
        secondHand.style.transformOrigin = `center bottom`;
        minuteHand.style.transform = `rotate(${min * 6}deg)`;
        minuteHand.style.transformOrigin = `center bottom`;
        hourHand.style.transform = `rotate(${hdeg}deg)`;
        hourHand.style.transformOrigin = `center bottom`;
    }
}
startClock()