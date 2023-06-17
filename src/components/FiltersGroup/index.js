import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeSearch,
    onClickCategory,
    onClickRating,
    onClickFilter,
    activeCategory,
    activeRating,
  } = props

  const aboutSearch = event => {
    console.log(event.target.value)
    if (event.key === 'Enter') {
      onChangeSearch(event.target.value)
    }
  }

  const onClickClear = () => {
    onClickFilter()
  }

  const aboutCategory = event => {
    const {id} = event.target

    onClickCategory(id)
  }

  const aboutRating = event => {
    const {id} = event.target
    onClickRating(id)
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onKeyPress={aboutSearch}
        />
        <BsSearch className="search-icon" />
      </div>
      <div>
        <h1 className="category">Category</h1>
        {categoryOptions.map(eachItem => {
          const active =
            eachItem.categoryId === activeCategory ? 'Active-cat' : ''
          return (
            <p
              className={`category-item ${active}`}
              onClick={aboutCategory}
              key={eachItem.categoryId}
              id={eachItem.categoryId}
            >
              {eachItem.name}
            </p>
          )
        })}
      </div>
      <div>
        <div>
          <h1 className="category">Rating</h1>
          {ratingsList.map(eachItem => {
            const activeRate =
              eachItem.ratingId === activeRating ? 'Active-cat' : ''

            return (
              <button
                className="rating-img-container"
                type="button"
                onClick={aboutRating}
                key={eachItem.ratingId}
              >
                <img
                  src={eachItem.imageUrl}
                  className="rating-img"
                  alt={`rating ${eachItem.ratingId}`}
                  id={eachItem.ratingId}
                />
                <span className={`up ${activeRate}`}>& up</span>
              </button>
            )
          })}
        </div>
      </div>
      <button type="button" className="btn" onClick={onClickClear}>
        {' '}
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
