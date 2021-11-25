export default async function handler(req, res) {
    const data = await (await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)).json();
    return res.status(200).json(data.story);
}