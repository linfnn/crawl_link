export const handleCrawlLinkClick = async (url) => {
    if (checkUrl(url)) {
        const crawl = await fetch(`http://localhost:8000/crawl/${url}`)
        const dataJson = await crawl.json()
        console.log(dataJson.data)
    } else {
        const checkUrlParagraph = document.getElementById('check-url-p')
        checkUrlParagraph.style.display = "block"
    }
}

const checkUrl = (url) => {
    if (url) {
        if (url.startsWith('http')) {
            return true
        }
        return false
    }
    return false
}