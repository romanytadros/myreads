export const bookList=(payload)=>{
    return{
        payload,
      type: 'BOOK_LIST',
    }
  }
  
 
  export const searchBook=(query)=>{
      return{
          query,
          type: 'SEARCH_BOOK',
          
          
      }
      }
  
  export const getAllBooks=( )=>{
      return{
          type: 'GET_ALL_BOOKS'
      }
      }
  export const isBusy=(isbusy)=>{
      return{
          type: 'IS_BUSY',
          isbusy
      }
      }
  export const isBusy2=(isbusy2)=>{
          return{
              type: 'IS_BUSY2',
              isbusy2
          }
          }
  export const currentlyReading=(currentlyReading)=>{
      return{
          type: 'CURRENTLY_READING',
          currentlyReading
      }
      }
  
  export const wantToRead=(wantToRead)=>{
      return{
          type: 'WANT_TO_READ',
          wantToRead
      }
      }
  export const read=(read)=>{
      return{
          type: 'READ',
          read
      }
      }
  