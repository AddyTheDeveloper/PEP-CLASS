// Question 2: Create a score tracker using closure with methods addScore(points) and getScore().

function createScoreTracker() {
    let score = 0;

    return {
        addScore: function (points) {
            score += points;
            console.log(`Added ${points} points. Current score: ${score}`);
        },
        getScore: function () {
            return score;
        }
    };
}

const tracker = createScoreTracker();
tracker.addScore(10);
tracker.addScore(5);
console.log(tracker.getScore());
