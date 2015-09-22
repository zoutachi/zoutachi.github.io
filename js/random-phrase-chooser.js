$(document).ready(function () {

    var randomNoun = {
        new: "",
        old: ""
    };
    var randomVerb = {
        new: "",
        old: ""
    }
    var finalPhrase = {
        new: "",
        old: ""
    };

    //Get either a random phrase from verbs and nouns or have a small chance of getting a set phrase
    function getRandomPhrase() {

        //Low chance set phrases
        var rarePhrase = ["stops being a dog", "stops being a frog", "gets off the internet", "ランダムに日本語を使うのを止められたら", "cuts some weight", "stops talking in the third person", "wakes up", "forgets about his one-sided love", "fights you irl", "makes gymnopedies", "folds 1000 cranes"];

        //Array of verbs for random phrases
        var verbs = ["finds", "plays", "sees", "becomes", "watches", "falls in love with", "realizes", "discovers", "passes", "stops being", "takes", "meets", "gets", "obtains", "accepts", "adopts", "builds", "avoids", "drops", "chases", "inhales", "obeys", "visits", "passes", "notices", "reaches"];

        //Array of nouns for random phrases
        var nouns = ["the pasta on the piano", "the sunset", "rainfall", "the sunrise", "nightfall", "a dog", "a frog", "a fish", "those moments lost in time", "tears in rain", "a real man", "a torrential downpour", "ferrets", "slipknot paranoia", "faster-than-light travel", "a flicker of light", "singularity", "the event horizon", "the ceiling fan", "photosynthesis", "a bear", "sea coral", "some birds", "the beat", "the groove", "daikon", "anime", "...true love"];

        //Rarer nouns
        var rareNouns = ["ships off the shoulder of Orion", "C-beams glittering in the dark near Tannhäuser Gate", "ZALGO", "the dog that he is, or was Jonathan actually the fish? Maybe he was the frog"]

        //Function that chooses random element from array 
        function chooseRandomFromArray(arrayName) {
            return (arrayName[Math.floor(Math.random() * arrayName.length)]);
        };

        //Get a random noun, potentially getting a rare noun
        if (Math.random() > 0.95) {
            randomNoun.new = chooseRandomFromArray(rareNouns);
        } else {
            randomNoun.new = chooseRandomFromArray(nouns);
        }
        //Get a random verb
        randomVerb.new = chooseRandomFromArray(verbs);
        randomPhrase = randomVerb.new + " " + randomNoun.new;

        //Either roll the random phrase or a set phrase
        if (Math.random() > 0.9) {
            finalPhrase.new = chooseRandomFromArray(rarePhrase);
        } else {
            finalPhrase.new = randomPhrase;
        }

        //Make sure that the last noun and verb are not being used again
        if (randomNoun.new === randomNoun.old || randomVerb.old === randomVerb.new || finalPhrase.old === finalPhrase.new) {
            getRandomPhrase();
        }

        //Assign "old" values so no two words are used twice in a row
        randomNoun.old = randomNoun.new;
        randomVerb.old = randomVerb.new;
        finalPhrase.old = finalPhrase.new;

    } //getRandomPhrase

    //Initially get random phrase and display it on the page
    getRandomPhrase();
    $('#phrase').text(finalPhrase.new);

    //On click, get the random phrase and display it on the page
    $('#phrase').click(function () {
        getRandomPhrase();
        $('#phrase').text(finalPhrase.new);
    });

});