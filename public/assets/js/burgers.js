document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    };

   
    const changeDevourBtns = document.querySelectorAll('.change-devoured');
    // console.log(changeDevourBtns);

    if (changeDevourBtns) {
        //build this as a submit event, make a form. remove the if. give form an id
        //add event listener of submit on button id ate - run a fucntion 
        //add from in htlm and give form an id
        //get element by id and call the id of the form
        //add event listener
        //submit
        //second argunemnt is function with line 28 and on. google on submit event
        changeDevourBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id')
                console.log(id);
                const newDevour = e.target.getAttribute('.data-newdevour');

                const newDevourState = {
                    devoured: newDevour,
                };
                //this is the function to run anytime a button is clicked 
                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(newDevourState),
                }).then((response) => {
                    if (response.ok) {
                        console.log(`changed devour to: ${newDevour}`);
                        location.reload('/');
                    } else {
                        alert('soemthing went wrong');
                    }
                });
            });
        });
    }

    //post burger to devour
    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("this worked");

            const newBurger = {
                burger_name: document.getElementById('ca').value.trim(),
                devoured: document.getElementById('devoured'),
            };

            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body:JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('ca').value = '';
                console.log("Created a new burger");
                location.reload();
            });
        });
    }

    //delete devoured burgers
    // const devourBurgerBtns = document.querySelectorAll('.devour-burger');
    // devourBurgerBtns.forEach((button) => {
    //     button.addEventListener('click', (e) => {
    //         const id = e.target.getAttribute('data-id');
    //         fetch(`/api/burgers/${id}`, {
    //             method: 'DELETE',
    //         }).then((res) => {
    //             console.log(res);
    //             console.log(`Devoured burger: ${id}`);
    //             location.reload
    //         })
    //     })
    // })
    

});