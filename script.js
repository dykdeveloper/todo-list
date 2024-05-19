function btn1() {
    const text1 = document.getElementById('text1').value;
    const r2 = document.getElementById('r2');
    const p = document.createElement('p');
    const b1 = document.createElement('button');

    if (text1 == '') {
        alert('Please input a task');
        return; 
    }

    b1.innerHTML = 'remove';
    p.innerHTML = text1;
    p.appendChild(b1);
    r2.appendChild(p);

    document.getElementById('text1').value = '';

    b1.addEventListener('click', function() {
        r2.removeChild(p);
    });
}
