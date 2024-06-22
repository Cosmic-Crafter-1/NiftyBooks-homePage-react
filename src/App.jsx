import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ImageList from './components/ImageList'


function App() {
  return (
    <div className='container'>

      <Header />
      <Hero />

      {/* For kids */}
      <ImageList
        ageGroup="kids"
        ageRange="For Kids (Age 5-10) :"
      />

      {/* For teens */}
      <ImageList
        ageGroup="teens"
        ageRange="Coming of AGE (12-17) :"
      />

      {/* For adults */}
      <ImageList
        ageGroup="adults"
        ageRange="Realistic Fiction (18 & Above) :"
      />

    </div>
  )
}

export default App
