const SearchComponent = () => {
    

   const submit = (e) => {
        e.preventDefault();

   }
    
  return (
    <>
        <div>
            <form method="get">
                <div className='input-group'>
                <input type="text" className='input input-bordered'/>
                <button type='submit' className='btn btn-info'>Search</button>
                </div>
            </form>
            
        </div>
    </>
  )
}

export default SearchComponent