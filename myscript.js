        let person ={
            id :0,
            name:'bach'
        }
        let persons=[person]
        console.log(persons)

        function add() {
            let name = document.getElementById("name").value;
            let id = persons[persons.length -1].id + 1;
            persons.push({id,name});
            console.log(persons);
        }

        function del() {
            for (let person of persons)
            {
                if (person.name == document.getElementById("del_name").value)
                {
                    persons.splice(person.id,1)
                }
            }
            console.log(persons)
        }

 
