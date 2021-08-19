let dravid = require("./dravid.json");
let ganguly = require("./ganguly.json");
let sachin = require("./sachin.json");
let sehwag = require("./sehwag.json");
let virat = require("./virat.json");
let yuvraj = require("./yuvraj.json");

// write some logics to find total 4s 6s runs wickets of each players

let most_fours = 0;
let most_sixes = 0;
let most_runs = 0;
let most_wickets = 0;

let most_fours_player = "";
let most_sixes_player = "";
let most_runs_player = "";
let most_wickets_player = "";

const check_status = (data) => {
    let total_fours = 0;
    let total_sixes = 0;
    let total_runs = 0;
    let total_wickets = 0;

    for ([key, value] of Object.entries(data.data.batting)) {
        if (value["Runs"]) {
            total_runs += parseInt(value["Runs"]);
        }

        if (value["4s"]) {
            total_fours += parseInt(value["4s"]);
        }

        if (value["6s"]) {
            total_sixes += parseInt(value["6s"]);
        }
    }

    for ([key, value] of Object.entries(data.data.bowling)) {
        if (value["Wkts"]) {
            total_wickets += parseInt(value["Wkts"]);
        }
    }

    if (most_runs < total_runs) {
        most_runs = total_runs;
        most_runs_player = data.name
    }

    if (most_fours < total_fours) {
        most_fours = total_fours;
        most_fours_player = data.name
    }

    if (most_sixes < total_sixes) {
        most_sixes = total_sixes;
        most_sixes_player = data.name
    }

    if (most_wickets < total_wickets) {
        most_wickets = total_wickets;
        most_wickets_player = data.name
    }

}

check_status(sachin);
check_status(sehwag);
check_status(yuvraj);
check_status(dravid);
check_status(ganguly);
check_status(virat);

console.log("Runs", most_runs);
console.log(most_runs_player);

console.log("Wickets: ", most_wickets);
console.log(most_wickets_player);

console.log("Fours: ", most_fours);
console.log(most_fours_player);

console.log("Sixes: ", most_sixes);
console.log(most_sixes_player);
