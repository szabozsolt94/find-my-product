import { useState, useEffect } from 'react'
import { words } from './words'
import Products from './components/Products'
import Search from './components/Search'

function App() {

  const [products, setProducts] = useState(words)
  const [searchValue, setSearchValue] = useState('')
  const [type, setType] = useState('all')
  const [order, setOrder] = useState('noSort')

  useEffect(() => {
    searchInput()
    selectInput()
    sortInput()
  })

  const searchInput = () => {
    if (searchValue.length === 0) setProducts(words)
    else setProducts(words.filter(product => product.description.includes(searchValue)))
  }

  const selectInput = () => {
    if (type === 'all') setProducts(prevProducts => prevProducts)
    else setProducts(prevProducts => prevProducts.filter(product => product.type === type))
  }

  const sortInput = () => {
    switch (order) {
      case 'abcIncrease': setProducts(prevProducts => [...prevProducts].sort((a, b) => (a.title > b.title) ? 1 : -1))
        break
      case 'priceUp': setProducts(prevProducts => [...prevProducts].sort((a, b) => (a.price > b.price) ? 1 : -1))
        break
      case 'priceDown': setProducts(prevProducts => [...prevProducts].sort((a, b) => (a.price < b.price) ? 1 : -1))
        break
      default: setProducts(prevProducts => prevProducts)
    }
  }

  return (
    <div className="App">
      <Search setSearchValue={setSearchValue} setType={setType} setOrder={setOrder} />
      <Products data={products} />
    </div>
  );
}

export default App;
