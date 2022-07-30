let numTreasures = Math.floor(Math.random() * 8) + 2;
let text = "You're on a deserted island, looking for treasures. ";
text += "You have a special compass that tells you how far away you are from the nearest treasure. ";
text += "You can travel North, South, East, or West. ";
text += "Find that treasure!";
alert(text);
for (let i = 0; i < numTreasures; i++) {
    playGame();
}
function playGame() {
    let treasures = ["Holy Grail", "Aztec gold", "Fountain of Youth", "Magical Scepter", "Book of Spells", "Tomb of Genghis Khan", "Ark of the Covenant", "Map to El Dorado"];
    let index = Math.floor(Math.random() * treasures.length);
    let treasure = treasures[index];
    let playerX = Math.floor(Math.random() * 5) + 3;
    let playerY = Math.floor(Math.random() * 5) + 3;
    if (Math.random() < 0.5) {
        playerX = -playerX; //start from the west
    }
    if (Math.random() < 0.5) {
        playerY = -playerY; //start from the south
    }
    let steps = [];
    let distance = getDistance(playerX, playerY);
    while (distance !== 0) {
        let direction = prompt("You are " + distance + " miles away from the treasure. Will you go North, South, East, or West?");
        direction = direction[0].toLowerCase();
        if (direction === "n") {
            playerY++;
            steps.push("North");
        } else if (direction === "s") {
            playerY--;
            steps.push("South");
        } else if (direction === "e") {
            playerX++;
            steps.push("East");
        } else if (direction === "w") {
            playerX--;
            steps.push("West");
        } else {
            alert("That's an invalid direction.")
        }
        distance = getDistance(playerX, playerY);
    }
    alert("You found the " + treasure + "!");
    alert("Your path was " + steps.join(" --> ") + ".");
    function getDistance(x, y) {
        let distance = Math.sqrt(x ** 2 + y ** 2);
        distance = Number(distance.toFixed(2));
        return distance;
    }
}