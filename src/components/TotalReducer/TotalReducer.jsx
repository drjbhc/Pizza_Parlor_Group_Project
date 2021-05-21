import { useSelector, useDispatch } from 'react-redux';

function getTotal(props) { // Used in Customer Page.    Only grabs last price, does not actually add anything. Use reducer?

    // const [total, setTotal] = useState(0); // Needed for Checkout Page
    const cartList = useSelector((store) => store.cartReducer);
  
    const calculateOrderCost = cartList => {
      const totalPrice = (sum, item) => sum + Number(item.price);
      const priceTotal = cartList.reduce(totalPrice, 0); // Bad naming convention, to fix when working
      return priceTotal;
    }

    props.setTotal(calculateOrderCost())

    return (
        <span>{priceTotal}</span>
    )
    //  for (let i = 0; i < pizzas.length; i++) {
    //    setTotal(total + Number(pizzas[i].price)); 
    //  }
}

export default getTotal;

   /*
      function EmployeeTotal() {

        const employeeList = useSelector(store => store.employeeReducer);

        const calculateMonthlyCost = employeeList => {

          const employeeSalary = (sum, employee) => sum + Number(employee.annualSalary);

          const annualEmployeeCost = employeeList.reduce(employeeSalary, 0)

          return annualEmployeeCost / 12;
        }

        return (
          <p>Total Monthly Cost: {calculateMonthlyCost(employeeList)}</p>
        );
      }
   */