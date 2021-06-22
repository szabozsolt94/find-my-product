const Search = ({ setType, setSearchValue, setOrder }) => {

    return (
        <div className='search-container'>
            <input onChange={e => setSearchValue(e.target.value.toLowerCase())} id='text' type='text' placeholder='Search for items...' />

            <div>
                <select onChange={e => setType(e.target.value)} defaultValue={'default'} name="type" id="type">
                    <option value="default" disabled hidden>Select type</option>
                    <option value="all">All</option>
                    <option value="dairy">Dairy</option>
                    <option value="fruit">Fruit</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                </select>
            </div>

            <div>
                <select onChange={e => setOrder(e.target.value)} name="sortAbc" id="sortAbc" defaultValue={'sortText'}>
                    <option value="sortText" disabled hidden>Sort items</option>
                    <option value="noSort">Default</option>
                    <option value="abcIncrease">Sort (A-Z)</option>
                    <option value="priceUp">Price (lower to higher)</option>
                    <option value="priceDown">Price (higher to lower)</option>
                </select>
            </div>

        </div>
    )
}

export default Search