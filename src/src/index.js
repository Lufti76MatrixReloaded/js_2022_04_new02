import ReactDOM from 'react-dom/client'
import ShoppingList from "./ShoppingList"

class Root {
}

let root : Root;
root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( <ShoppingList/> )
export default root
