const scrapy = require('node-scrapy')
const fetch = require('node-fetch')
 
const url = 'https://www.youtube.com/watch?v=gJn5Ds-EqAE&feature=emb_title'
const model = {
  author: '.author',
  repo: '[itemprop="name"]',
  stats: {
    commits: '.numbers-summary > li:nth-child(1) .num | trim',
    branches: '.numbers-summary > li:nth-child(2) .num | trim',
    releases: '.numbers-summary > li:nth-child(3) .num | trim',
    contributors: '.numbers-summary > li:nth-child(4) .num | trim',
    social: {
      watch: '.pagehead-actions > li:nth-child(1) .social-count | trim',
      stars: '.pagehead-actions > li:nth-child(2) .social-count | trim',
      forks: '.pagehead-actions > li:nth-child(3) .social-count | trim',
    },
  },
  files: [
    '.js-navigation-item .content',
    {
      name: 'a => $textContent',
      url: 'a => href',
    },
  ],
}
 
fetch(url)
  .then(res => res.text())
  .then(body => {
      console.log(body)
    // console.log(scrapy.extract(body, model))
  })
  .catch(console.error)