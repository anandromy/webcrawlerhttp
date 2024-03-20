const { crawlPage } = require('./crawl')

function main(){
    if(process.argv.length < 3){
        console.log("no website provided")
        process.exit(1)
    }
    if(process.argv.length > 3){
        console.log('Too many command line args')
        process.exit()
    }
    const baseURL = process.argv[2]
    console.log(`Starting crawl of ${baseURL}`)
    crawlPage(baseURL)
}

main()