// Question 9: Create a voting system using closure that tracks yes and no votes.

function createVotingSystem() {
    let yesVotes = 0;
    let noVotes = 0;

    return {
        voteYes: function () {
            yesVotes++;
            console.log(`Yes votes: ${yesVotes}`);
        },
        voteNo: function () {
            noVotes++;
            console.log(`No votes: ${noVotes}`);
        },
        getResults: function () {
            return {
                yes: yesVotes,
                no: noVotes,
                total: yesVotes + noVotes
            };
        }
    };
}

const poll = createVotingSystem();
poll.voteYes();
poll.voteYes();
poll.voteNo();
poll.voteYes();
console.log(poll.getResults());
