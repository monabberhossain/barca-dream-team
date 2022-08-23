const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', function () {
    const playerList = document.getElementById("player-list").children;
    const perPlayer = document.getElementById('per-player');
    if(perPlayer.value != '' && perPlayer.value != null){
        const perPlayerAmount = parseFloat(perPlayer.value);
        const playerExpencesAmount = playerList.length * perPlayerAmount;
        const playerExpences = document.getElementById('player-expences');
        playerExpencesAmount.innerText = playerExpences;
    }
    else{
        alert('Please input the amount of per player!');
    }   
});

const totalExpencesButton calculateTotalButton =  document.getElementById('calculate-total');
calculateTotalButton.addEventListener('click', function () {
    const playerList = document.getElementById("player-list")