import { handleCrawlLinkClick } from './crawl.js'
let url = ''

const app = () => {
    const input = document.getElementById('url-input')
    input.addEventListener('change', (e) => {
        url = e.target.value
    })
    const seacrhBtn = document.getElementById('filter-icon')
    seacrhBtn.addEventListener('click', async () => {
        console.log(url)
        await handleCrawlLinkClick(url)
    })
}
app()

