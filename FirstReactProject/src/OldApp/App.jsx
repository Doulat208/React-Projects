import Header from "../components/Header"
import Footer from "../components/Footer"
import Body from "../components/Body"
import Name from "../components/Name"
import FavDish from "../components/FavDish"

const App = () => {
  return (
    <div>
        <Header/>
        {/* <Body msg="This is my Body Msg" info="message" />
        <Body msg="This is my Second Msg" /> */}
        <Name name="Doulat" />
        <FavDish dish="Biriyani" />
        <Footer/>
    </div>
  )
}

export default App
