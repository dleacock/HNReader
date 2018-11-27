import fetch from 'cross-fetch';

export const RECEIVE_POST = 'RECEIVE_POST';
const MAX_STORIES = 10;

// Fetch the top ten story ids, then for the first ten call the api again for that story.
// Using thunk to create an action that returns a function which takes the dispatch as a
// parameter.
export function fetchPosts() {
    return async dispatch => {
        const topPostsData = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const topPosts = await topPostsData.json();

        for (let i = 0; i <= MAX_STORIES - 1; i++) {
            const postId = topPosts[i];
            const postData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`);
            const post = await postData.json();

            dispatch({
                index: i,
                type: RECEIVE_POST,
                title: post["title"],
                url: post["url"]
            });
        }
    }
}




