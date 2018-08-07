

var madePerson = {};

    function personMaker(){
        madePerson.name = document.getElementById("name").value;
        madePerson.age = document.getElementById("age").value;
        madePerson.occupation = document.getElementById("occupation").value;
        personOut();
    }

    function changePerson(){
        madePerson.name = document.getElementById("changedName").value;
        madePerson.age = document.getElementById("changedAge").value;
        madePerson.occupation = document.getElementById("changedOccup").value;
        personOut();
    }

    function personOut(){
        document.getElementById("print").innerHTML = "Object with name : " + madePerson.name +" age : " + madePerson.age+ " occupation : "+madePerson.occupation;
    }
