let f = document.getElementById('mark');
let status_url;
let array = [];
let status_animal;
document.getElementById('cat').addEventListener('click', () => {
    document.querySelector('#new_animal').classList.add('list_mark');
    f.style.opacity = '1';
    document.querySelector('.info').innerHTML = '';
    qwer('https://api.thecatapi.com/v1/images/search');
    status_animal = 'cat;'
});

document.getElementById('dog').addEventListener('click', () => {
    document.querySelector('#new_animal').classList.add('list_mark');
    f.style.opacity = '1';
    document.querySelector('.info').innerHTML = '';
    qwer('https://api.thedogapi.com/v1/images/search');
    status_animal = "dog";
});

document.getElementById('like').addEventListener('click', () => {


    array.push({ status: 2, link: status_url });
    document.querySelector('.info').innerHTML = '';
    f.style.opacity = '1';
    if (status_animal == 'cat') {
        qwer('https://api.thecatapi.com/v1/images/search');
    } else {
        qwer('https://api.thedogapi.com/v1/images/search');
    }


    console.log(array);
})
document.getElementById('dislike').addEventListener('click', () => {


    array.push({ status: 1, link: status_url });
    document.querySelector('.info').innerHTML = '';
    f.style.opacity = '1';
    if (status_animal == 'cat') {
        qwer('https://api.thecatapi.com/v1/images/search');
    } else {
        qwer('https://api.thedogapi.com/v1/images/search');
    }

    console.log(array);
})

function qwer(link) {
    fetch(link)
        .then((response) => {
            console.log(response)
            response.json().then(data => {
                    console.log(data)
                    let img = document.createElement('img');
                    img.setAttribute('class', 'main_img');
                    img.src = data[0].url;
                    status_url = data[0].url;
                    let p = document.createElement('p');
                    p.setAttribute('class', 'main_info');
                    document.querySelector('.info').appendChild(img);
                    if (data[0].breeds[0]) {

                        p.innerHTML = `Name: ${data[0].breeds[0].name}, life-span: ${data[0].breeds[0].life_span}`
                        document.querySelector('.info').appendChild(p);
                    } else {
                        p.innerHTML = `little information`;
                        document.querySelector('.info').appendChild(p);
                    }
                })
                .catch(data => {

                    let p = document.createElement('p');
                    p.setAttribute('class', 'main_info');
                    p.innerHTML = `little information`;
                    document.querySelector('.info').appendChild(p);
                })
        })
        .catch(data => {
            let p = document.createElement('p');
            p.setAttribute('class', 'main_info');
            p.innerHTML = `Error is ${data}`;
            document.querySelector('.info').appendChild(p);
        })
}

document.getElementById('end_mark').addEventListener('click', () => {
    f.style.opacity = '0';
    document.querySelector('.info').innerHTML = '';
    document.querySelector('.list_mark').classList.remove('list_mark');
    document.querySelector('#like_mark').innerHTML = '';
    document.querySelector('#dislike_mark').innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.style.listStyle = 'none';
        if (array[i].status == 2) {
            let img = document.createElement('img');
            img.src = array[i].link;
            li.append(img);

            document.querySelector('#like_mark').appendChild(li);
        } else {
            let img = document.createElement('img');
            img.src = array[i].link;
            li.append(img);

            document.querySelector('#dislike_mark').appendChild(li);
        }
    }
})