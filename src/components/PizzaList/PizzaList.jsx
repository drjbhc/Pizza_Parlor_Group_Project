import { useDispatch } from 'react-redux';

function PizzaList() {

    const dispatch = useDispatch();

    function getPizzas() {
        axios({
            method: 'GET',
            url: '/api/pizza'
        }).then(response => {
            console.log(response.data);

            dispatch({
                type: 'SET_PIZZA_LIST',
                payload: response.data
            })

        }).catch(error => {
            console.log('error on GET', error);
        });
    }

    return (
        <> </>
    )
}

export default PizzaList;