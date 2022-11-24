const block = document.createElement('div');
block.innerText = 'Hello World!!!';
document.body.append(block);

const showTime = () => {
    const timeBlock = document.createElement('h1');
    document.body.prepend(timeBlock);

    const getTime = () => {
        const date = new Date();
        const hour = `0${date.getHours()}`.slice(-2);
        const minutes = `0${date.getMinutes()}`.slice(-2);
        const seconds = `0${date.getSeconds()}`.slice(-2);
        timeBlock.innerText = `${hour}:${minutes}:${seconds}`;
    }
    
    getTime();
    setInterval(getTime, 1000);
}

showTime();