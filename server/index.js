import cpp from 'child-process-es6-promise'

export default first()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function first() {
    console.log('running node info...')
    await sleep(17000) 
    cpp.exec('node --version')
    .then(result => {
        console.log(result.stdout);
    })
    .then(() =>{
        second()
    })
    .catch(error => {
        console.error('ERROR: ', error)
    })
}

async function second(){
    console.log('running mysql dump...')
    await sleep(17000)
    cpp.exec('mysqldump --user=rowot --password=admin  test> /home/jean/Documents/dump.sql',
            {
            cwd: '/usr/local/mysql/bin'
            })

    .then(result => {
        console.log(result.stdout)
    })
    .then(() =>{
        third()
    })
    .catch(error => {
        console.error('ERROR: ', error)
    })
}

async function third(){
    console.log('running docker info...')
    await sleep(17000)
    cpp.exec('docker --version')
    .then(result => {
        console.log(result.stdout);
    })
    .then(() =>{
        first()
    })
    .catch(error => {
        console.error('ERROR: ', error)
    })
}
