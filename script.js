document.getElementById('cat').addEventListener('click', () => {
    document.querySelector('.info').innerHTML = '';
    fetch('https://api.thecatapi.com/v1/images/search')
        .then((response) => {
            console.log(response)
            response.json().then(data => {
                    console.log(data)
                    let img = document.createElement('img');
                    img.setAttribute('class', 'main_img');
                    img.src = data[0].url;
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

})
document.getElementById('dog').addEventListener('click', () => {
    document.querySelector('.info').innerHTML = '';
    fetch('https://api.thedogapi.com/v1/images/search')
        .then((response) => {
            console.log(response)
            response.json().then(data => {
                    console.log(data)
                    let img = document.createElement('img');
                    img.setAttribute('class', 'main_img');
                    img.src = data[0].url;
                    let p = document.createElement('p');
                    p.setAttribute('class', 'main_info');
                    document.querySelector('.info').appendChild(img);
                    if (data[0].breeds[0]) {

                        p.innerHTML = `Name: ${data[0].breeds[0].name}, weight: imperial -  ${data[0].breeds[0].weight.imperial}, metric -  ${data[0].breeds[0].weight.metric}`
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

})