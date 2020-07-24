import React from 'react'
const api = 'https://hacker-news.firebaseio.com/v0/'
const json = '.json?print=pretty'


const fetchItem = (id) => {
    return fetch(`${api}item/${id}${json}`)
    .then((stories) => stories.json())
}

export const fetchTopStories = () => {
    const endpoint = `${api}topstories${json}`
    return fetch(endpoint)
        .then((stories) => stories.json())
        .then((data) => {
            return data.slice(0,50)
        })
        .then((ids) => Promise.all(ids.map((id) => fetchItem(id))))
}
