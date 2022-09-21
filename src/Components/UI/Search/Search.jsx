import React from 'react'
import { SearchOutlined  } from '@ant-design/icons'
const Search = () => {
  return (
    <div className='flex items-center bg-gray-200 rounded-full py-2 px-4'>
      <SearchOutlined className='text-lg text-gray-600'/>
      <input
      className='bg-gray-200 px-2 ml-2 focus:outline-none'
      type='text'
      placeholder="Search Twitter"
      />
    </div>
  )
}

export default Search