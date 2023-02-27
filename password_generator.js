class PasswordGenerate{
    constructor(){}
    generateDigit(){
        let a = Math.round(Math.random()*10);
        return a;
    }
    generateSpecial(){
        let b = ['@','#','$','&','*'];
        let a = Math.random();
        let c = Math.trunc(a*b.length);
        return b[c];
    }
    generateLetter(){
        let arr = [];
        let j = 0;
        for(let i=65;i<=90;i++){
            arr[j] = String.fromCharCode(i);
            j++;
        }
        for(let i=97;i<=122;i++){
            arr[j] = String.fromCharCode(i);
            j++;
        }
        let r = Math.random();
        r = r*arr.length;
        r = Math.trunc(r);
        return arr[r];
    }
}

class Generate extends PasswordGenerate{
    constructor(){
        super();
    }
    generateWeak(){
        let i = 8; let j = 0; let arr = []; let password = "";
        for(let i=65;i<=90;i++)
        {
            arr[j]=String.fromCharCode(i);
            j++;
        }
        let b = Math.trunc(Math.random()*arr.length);
        password = password + String(arr[b]);
        while(i!=0){
            let character = new PasswordGenerate();
            password += String(character.generateLetter());
            i--;
        }
        let a2 = new PasswordGenerate();
        let d1 = a2.generateDigit();
        let d2 = a2.generateSpecial();
        let index = Math.trunc((Math.random())*password.length);
        let index2 = Math.trunc((Math.random())*password.length);
        if(index2 == 0){
            index2 += 1;
        }
        if(index == 0){
            index += 1;
        }
        if(index == index2){
            index2 += index;
        }
        if(index2 >= password.length){
            index2 = 4;
            if(index2 == index){
                index2 = 6;
            }
        }
        let x = password.lastIndexOf(password.charAt(index));
        let y = password.lastIndexOf(password.charAt(index2));
        password = password.replace(password.charAt(x),String(d1));
        password = password.replace(password.charAt(y),String(d2));
        return password; 

    }
    generateStrong(){
        let i = 11;
        let b = [1,2,3];
        let password = "";
        while(i!=0){
            let c = Math.trunc(Math.random()*b.length);
            if(b[c]==1){
                let character = new PasswordGenerate();
                password = password + String(character.generateDigit());
            }
            else if(b[c]==2){
                let character = new PasswordGenerate();
                password = password + String(character.generateSpecial());
            }
            else if(b[c]==3){
                let character = new PasswordGenerate();
                password = password + String(character.generateLetter());
            }
            i--;
        }
        return password;
    }
    generateVeryStrong(){
        let i2 = 15; let j = 0; let arr = []; let password = "";
        for(let i=65;i<=90;i++)
        {
            arr[j]=String.fromCharCode(i);
            j++;
        }
        let b = Math.trunc(Math.random()*arr.length);
        password = password + String(arr[b]);
        let brr = [1,2,3];
        while(i2!=0){
            let c = Math.trunc(Math.random()*brr.length);
            if(brr[c]==1){
                let character = new PasswordGenerate();
                password = password + String(character.generateDigit());
            }
            else if(brr[c]==2){
                let character = new PasswordGenerate();
                password = password + String(character.generateSpecial());
            }
            else if(brr[c]==3){
                let character = new PasswordGenerate();
                password = password + String(character.generateLetter());
            }
            i2--;
        }
        return password;
    }
}

let generateWeak = function(e){
    let a = document.getElementById('gen1');
    let b = new Generate();
    a.innerText = b.generateStrong();
}

let generateStrong = function(e){
    let a = document.getElementById('gen2');
    let b = new Generate();
    a.innerText = b.generateWeak();
}

let generateVeryStrong = function(e){
    let a = document.getElementById('gen3');
    let b = new Generate();
    a.innerText = b.generateVeryStrong();
}


btn1.addEventListener('click',generateWeak);
btn2.addEventListener('click',generateStrong);
btn3.addEventListener('click',generateVeryStrong);