function shout(string){
    return string.toUpperCase();
}
// shout("hello");

function whisper(string){
    return string.toLowerCase();
}
// whisper("HELLO")

function logShout(string){
    console.log(string.toUpperCase());
}
// logShout("david")

function logWhisper(string){
    console.log(string.toLowerCase());
}
// logWhisper("Ondiege");

function sayHiToHeadphonedRoommate(string){
    if (string == string.toLowerCase()){
        return "I can\'t hear you!";
    }
    if (string == string.toUpperCase()){
        return "YES INDEED!";
    }
    if (string == "Let's have dinner together!"){
        return "I would love to!";
    }
}

