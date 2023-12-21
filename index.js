const superbowlWin = function (record) {
    // Find the first season where the result is a win ("W")
    const winningSeason = record.find(season => season.result === "W");

    // Return the year if a winning season is found, otherwise return undefined
    return winningSeason ? winningSeason.year : undefined;
};

// Example usage:
const record = [
    // ... (the provided array of football seasons)
];

const winningYear = superbowlWin(record);

if (winningYear) {
    console.log(`The team won the Super Bowl in the year ${winningYear}.`);
} else {
    console.log("The team has not won the Super Bowl.");
}