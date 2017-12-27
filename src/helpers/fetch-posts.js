import fetchJSON from './fetch-json';
export default function fetchPosts(fetchURL, postsArray, pagePagination, countPostsOnPage) {
    return new Promise((resolve, reject) => resolve(postsArray))
        .then(blocksToShow => blocksToShow.filter((item, i) => i>=countPostsOnPage*(pagePagination-1) && i< countPostsOnPage*pagePagination))
        .then(firstTenPostIds => firstTenPostIds.map(id => `${fetchURL}/item/${id}.json`))
        .then(firstTenPostUrls => firstTenPostUrls.map(url => fetchJSON(url)))
        .then(response => Promise.all(response))
}