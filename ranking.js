class College {
    constructor(name, location, fees, ranking) {
        this.name = name;
        this.location = location;
        this.fees = fees;
        this.ranking = ranking;
    }

    calculateScore(maxFees, rankingWeight, feesWeight) {
        return (this.ranking * rankingWeight) + ((this.fees / maxFees) * feesWeight);
    }
}

function rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight) {
    // Filter colleges based on location and fees
    let eligibleColleges = colleges.filter(college => {
        return college.location === preferredLocation && college.fees <= maxFees;
    });

    // Calculate the score for each eligible college
    eligibleColleges.forEach(college => {
        college.score = college.calculateScore(maxFees, rankingWeight, feesWeight);
    });

    // Sort colleges by their score in non-decreasing order
    eligibleColleges.sort((a, b) => a.score - b.score);

    // Output the sorted colleges with their score
    eligibleColleges.forEach(college => {
        console.log(`Name: ${college.name}, Location: ${college.location}, Fees: ${college.fees}, Ranking: ${college.ranking}, Score: ${college.score.toFixed(2)}`);
    });
}

let colleges = [
    new College("College A", "New York", 20000, 1),
    new College("College B", "California", 15000, 2),
    new College("College C", "New York", 25000, 3),
    new College("College D", "New York", 10000, 4)
];

let preferredLocation = "New York";
let maxFees = 20000;
let rankingWeight = 2;
let feesWeight = 1;

rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight);
