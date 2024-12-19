import { Header } from "./components/header"
import { Home } from "./components/home"
import { Missions } from "./components/mission"
import { Services } from "./components/service"

import AppFooter from './components/footer'
import ContactFooter from './components/contact'
import { About } from './components/about'
import ProductPreview from './components/product'
function App() {
  return <>
  <Header></Header>
  <Home></Home>
  <Services></Services>
  <Missions></Missions>
  <ProductPreview/>
  <About/>
  <ContactFooter/>
  <AppFooter/>
  </>
}

export default App
