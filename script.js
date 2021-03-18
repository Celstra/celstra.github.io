//Setting up the intital storage for generating ideas.
var setOne = [
    "enormous",
    "minuscule",
    "ancient",
    "newly created",
    "poisonous",
    "radioactive",
    "reinforced",
    "frozen",
    "incendiary",
    "camouflaged",
    "blemished",
    "broken",
    "hellish",
    "makeshift",
    "elegant",
    "indestructible",
    "fragile",
    "legendary",
    "mystical",
    "techy"
];
var setTwo = [
    "dwelling",
    "outpost",
    "ranged weapon",
    "melee weapon",
    "turret",
    "landmine",
    "ammo pickup",
    "armor pickup",
    "health pickup",
    "helmet/headpiece",
    "shield",
    "crate",
    "restraint",
    "teleporter",
    "monolith",
    "prosthetic limb",
    "plant",
    "water vehicle",
    "flying vehicle",
    "land vehicle",
    "barricade",
    "holy artifact",
    "plaything",
    "sidekick",
    "overlord",
    "maintenance tool",
    "scepter",
    "walking stick",
    "light source",
    "door/gateway",
    "beast of burden",
    "pet",
    "gauntlet",
    "key",
    "generator"
];
var setThree = [
    "werewolf",
    "steampunk",
    "bounty hunter",
    "bounty hunting steampunk werewolf",
    "interplanetary explorer",
    "archaeological adventurer",
    "@$$-kickin space marine",
    "insect worker drone",
    "sassy robot",
    "grizzled dwarf",
    "dweeby halfling",
    "wisecracking wizard",
    "twiggy, effeminate elf stand in",
    "dracula",
    "caveman capable of making stuff that resembles things that haven’t been invented yet",
    "child genius who uses common household items to cause mischief and or save the world",
    "sentient Trek type alien with wrinkly forehead that wishes you no particular harm",
    "malignant Aliens type alien that eats children and the elderly",
    "adorable talking animal with opposable thumbs and huuuuuge eyes",
    "hideous, misunderstood mutant living below a dystopian city",
    "ethereal ghost being that exists between dimensions so that when it passes into our world, it looks all smeary and see-through",
    "LOTR style orc thing, but not an orc, like a bigger, more badass orc, like those guys in LOTR....but not LOTR",
    "LOST style castaway",
    "Nazi supersoldier from an alternate universe where the Nazis won and there’s all sorts of occult $#!@ going on. And robots",
    "slick movie-adaptation superhero played by a beautiful film star in a form fitting outfit",
    "angelic warrior race of angelic warriors",
    "ninja princess Catholic schoolgirl nun",
    "primitive tribe of peaceful, environmentally friendly hunter gatherers",
    "scientist inventor from the not-too-distant future, but who probably won’t actually be making anything this cool yet",
    "mad doctor who cross breeds people with animals to hilarious effect",
    "... Have you seen Mad Max?",
    "zombie Holocaust survivalist with quirky, endearing qualities that remind you of someone you know in real life",
    "zombie",
    "extreme serial killer shock rocker",
    "phophetic drunken street bum with a few loose screws",
    "undersea race of chitinous, would be Aquarians",
    "cowpoke gunslinger",
    "demon",
    "international superspy",
    "mafia hitman",
    "street pimp",
    "Tony Hawk"
];

//Setting up the initial storage for random revision.
var setFour = [
    "primitive",
    "futuristic",
    "evil",
    "epic",
    "elegant",
    "elongated",
    "truncated",
    "realistic",
    "cartoonish",
    "ornate",
    "simple",
    "zazzy",
];

//Grabs a random string from array to be used in functions.
const randomValue = (list) => {
    return list[Math.floor(Math.random() * list.length)];
}

//Generates the idea for the first button
function idea (){
  var wordOne = (randomValue(setOne));
  var wordTwo = (randomValue(setTwo));
  var wordThree = (randomValue(setThree));
  document.getElementById("idea").innerHTML ="I need you to make a " + wordOne + " " + wordTwo + " for a " + wordThree + ".";
}


function revision (){
  var wordFour = (randomValue(setFour));
  var revisionNumber = Math.floor(Math.random() * 6) + 1;
  document.getElementById("revision").innerHTML ="Revise thumbnail " + revisionNumber + " and make it more " + wordFour + ".";
}