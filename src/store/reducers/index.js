import FuzzySearch from 'fuzzy-search';
const inialState = {
  dataSet : [],
  searchDataSet: [],
  searchValue: '',
}

const movieList = ( state = inialState , action) => {
  const { dataSet } = state;
  switch(action.type) {
      case 'API' :
        const newDataSet = [...dataSet, ...action.value]
        return {
            ...state ,dataSet: newDataSet,
        }

      case 'SEARCH':
        const searcher = new FuzzySearch(dataSet, ['name']);
        console.log(searcher)
        return {
          ...state ,
          searchDataSet: searcher.search(action.value),
          searchValue: action.value
        }

      default: return state;
  }
}

export default movieList;