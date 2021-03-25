let rockStar = new Map();
rockStar.set("artist", "The Rolling Stones");
rockStar.set("song", "Angie");
rockStar.set("album", "Goats Head Soup");
rockStar.set("singer", "Mick Jagger");

let newRock = new Map();

for(let key of rockStar.entries()){
    if(key[0][0] > 'a'){
        newRock.set(...key);
    };
}

console.log(newRock);


module.exports = {rockStar, newRock};