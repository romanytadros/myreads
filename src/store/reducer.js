const INITIAL_VALUE={
    booklist:[],
    query:[],
    isbusy:true,
    currentlyReading:[],
    wantToRead:[],
    read:[],
    isbusy2:false,

     
}
export default function BookListReducer( state=INITIAL_VALUE,action){
  switch(action.type){
    case 'BOOK_LIST':
      return {
        ...state,
        booklist:action.payload
      }
    
    case 'SEARCH_BOOK':
      return {
        ...state,
        query:action.query,
       }
    
    case 'GET_ALL_BOOKS':
      return {
        ...state,
      }
    case 'IS_BUSY':
      return {
        ...state,
        isbusy:action.isbusy,
      }
    case 'IS_BUSY2':
        return {
          ...state,
          isbusy2:action.isbusy2,
        }

      case 'CURRENTLY_READING':

      return {
        ...state,
        currentlyReading:action.currentlyReading,
      }
      case 'WANT_TO_READ':

      return {
        ...state,
        wantToRead:action.wantToRead,
      }
      case 'READ':

      return {
        ...state,
        read:action.read,
      }
      


    default:
      return state;
  }
}