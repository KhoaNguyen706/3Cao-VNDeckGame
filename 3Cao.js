// Computer has 3 card
// player has 3 card 
// we only take a number 10-9 for example 2-8-5 -> 5 | 3-7-10 -> 0 | jqk jjj qqq kkk -> 3 ba tien
function CardtoNumber(card){
    if(card=='J' ||card=='Q' || card=='K') return 10;
    else if (card=="A") return 1;
    else return card;
}
function shuffleDeck(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}
function draw(cards){
    return cards[Math.floor(Math.random()*52)]
}
function sumOfDigits(n) {
    while (n >= 10) {
        n = String(n).split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    return n;
} 

function ComputerCard(cards){
    Computer1 =draw(cards)
    Computer2 =draw(cards)
    Computer3 =draw(cards)
    print(Computer1,Computer2,Computer3)
    totalofcomputer=CardtoNumber(Computer1)+CardtoNumber(Computer2)+CardtoNumber(Computer3)
    if (["J", "Q", "K"].includes(Computer1) && 
        ["J", "Q", "K"].includes(Computer2) && 
        ["J", "Q", "K"].includes(Computer3)) {
        return 30; 
    }

    return totalofcomputer %10;
}
function play3cao(){
    print("welcome to 3 Cao card game!");
    print("S to Start || E to End")
    const n = readline();
    if (n=='s'){
        while(true){
            cards=["A",2,3,4,5,6,7,8,9,10,"J","Q","K",
                "A",2,3,4,5,6,7,8,9,10,"J","Q","K",
                "A",2,3,4,5,6,7,8,9,10,"J","Q","K",
                "A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
            const p1= ComputerCard(cards);
                print("Player 1 :",p1)
            const p2= ComputerCard(cards);
                print("Player 2 :",p2)
            const p3= ComputerCard(cards);
                print("Player 3 :",p1)
            const p4= ComputerCard(cards);
                print("Player 4 :",p2)
            const You= ComputerCard(cards);
                print("Your cards: ",You);
            const scores = {
                    "Player 1": p1,
                    "Player 2": p2,
                    "Player 3": p3,
                    "Player 4": p4,
                    "You": You
                };
                
                // Find the highest score
            const maxScore = Math.max(...Object.values(scores));
                
                // Find the winner(s)
            const winners = Object.keys(scores).filter(player => scores[player] === maxScore);
                
            print("Winner(s):", winners.join(", "));
            if(winners.join(", ").includes("You"))print("Congratulations You are winner!")
            else print("You are so Unlucky!")
            print("S to Start playing again|| E to End")
            const ask=readline();
            if (ask=="s") play3cao();
            else if (ask=="e") print("Thank for Playing");
            else print('error!')
            
            break

        }
    }else if (n=="e"){
        print("Thank for Playing");
    }else{
        print('error!')
        play3cao()
    }
}
play3cao()