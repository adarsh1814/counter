let count = 0;

function changeNum(num) {
    count += num;
    let counter = document.getElementById('counter');
    counter.innerHTML = count;

}