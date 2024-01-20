

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const user = tweetForm.elements.username;
    const tweet = tweetForm.elements.tweet;
    addTweet(user.value, tweet.value)
    user.value = '';
    tweet.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})
