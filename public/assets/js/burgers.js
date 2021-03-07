document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    };

   
    const changeDevourBtns = document.getElementById('#ate');

    if (changeDevourBtns) {
        changeDevourBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const newDevour = e.target.getAttribute('data-newdevour');

                const newDevourState = {
                    devour: newDevour,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
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
    const createBurgerBtn = document.getElementById('#try');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            const newBurger = {
                name: document.getElementById('bu').value.trim(),
                devour: document.getElementById('devoured').checked,
            };

            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body:JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('bu').value = '';
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
 