## Color Switcher (Click Event)

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target.id);
        
        if(e.target.id == 'grey')
            body.style.backgroundColor = e.target.id;

        if(e.target.id == 'white')
            body.style.backgroundColor = e.target.id;

        if(e.target.id == 'blue')
            body.style.backgroundColor = e.target.id;

        if(e.target.id == 'yellow')
            body.style.backgroundColor = e.target.id;
    })
});

```

## BMI (Taking input)

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please insert valid height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please insert valid weight";
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let res;
            if(bmi < 18.5)
                res = "Underweight";
            else if(bmi > 25)
                res = "Overweight";
            else
                res = "Normal range";

        results.innerHTML = `<span>${bmi}</span><br><span>${res}</span>`;
    }  
})
```