import { Routes ,Route} from "react-router-dom";
import Booklist from './Booklist'
// import Routeii from './router/route'
import Book from './Book'
import NewBook from './NewBook'
import { BookLayout } from "./BookLayout";

export function BookRoutes(){
    return (
        <>
        <Routes>
            
        
        <Route   element={<BookLayout/>}>
        
         <Route index element={<Booklist/>}/>
          <Route path=':id' element={<Book/>}/>
          <Route path='new' element={<NewBook/>}/>
          </Route>
        </Routes>
        </>
    
    )
}