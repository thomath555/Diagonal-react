import FuzzySearch from 'fuzzy-search';
const inialState = {
  dataSet : [],
  searchDataSet: [],
  searchValue: '',
}

const nameChanger = ( state = inialState , action) => {
  const { dataSet } = state;
  switch(action.type) {
      case 'API' :
        const newDataSet = [...dataSet, ...action.value]
        return {
            ...state , dataSet: newDataSet,
        }

      case 'SEARCH':
        const searcher = new FuzzySearch(dataSet, ['name']);
        return {
          ...state , searchDataSet: searcher.search(action.value), searchValue: action.value
        }

      default: return state;
  }
}

export default nameChanger;