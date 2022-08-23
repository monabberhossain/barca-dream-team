const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', function () {
    const playerList = document.getElementById("player-list").children;
    const perPlayer = document.getElementById('per-player');
    if(perPlayer.value != '' && perPlayer.value != null){
        const perPlayerAmount = parseFloat(perPlayer.value);
        const playerExpencesAmount = playerList.length * perPlayerAmount;
        const playerExpences = document.getElementById('player-expences');
        playerExpences.innerText = playerExpencesAmount;
    }
    else{
        alert('Please input the amount of per player!');
    }   
});

const calculateTotalButton =  document.getElementById('calculate-total');
calculateTotalButton.addEventListener('click', function () {
    const playerExpences = document.getElementById('player-expences');
    const playerExpencesAmount = parseFloat(playerExpences.innerText);
    const managerSalary = document.getElementById("manager-salary");
    const managerAmount = parseFloat(managerSalary.value);
    const coachSalary = document.getElementById("coach-salary");
    const coachAmount = parseFloat(coachSalary.value);
    const totalExpencesAmount = playerExpencesAmount + managerAmount + coachAmount;
    const totalExpences = document.getElementById('total-expences');
    totalExpences.innerText = totalExpencesAmount;
})