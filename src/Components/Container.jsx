import React  from "react"
import ContentBetween from './ContentBetween'
import 'bootstrap/dist/js/bootstrap.js';
import Trending from './Trending'
import Again from './Again'
import New from './New'
import Footer from './Footer'

class Container extends React.Component {
    render() {
        return (
        <div className="container-fluid px-4">
            <ContentBetween/>
            <Trending search="hobbit"/>
            <Again search="Evil Dead"/>
            <New search="Star Wars"/>
            <Footer/>
        </div>
    )
    }
}

export default Container
    