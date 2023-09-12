import React from 'react'

const Stack = ({stack}) => {

  return (


    <div className="bg-secondary/75 border-[1px] border-secondary-content/50 rounded-xl relative z-40 overflow-hidden shadow-xl">
            <table className="table">
                {/* head */}
                <thead className='bg-secondary/75 backdrop-blur-lg'>
                    <tr className='text-secondary-content'>
                        <th className='text-lg col-span-2 translate-x-3'>Stack</th>
                        <th className='text-lg'>Tool</th>
                    </tr>
                </thead>
                <tbody className='text-secondary-content'>
                    {/* row 1 */}
                    {stack.map( (item, index) => (
                        <tr key={index}>
                            <th>
                                <div className='tooltip tooltip-secondary' data-tip={item.name}>
                                    <button className='btn bg-base-200 w-[75px] h-[75px] m-0 p-0 aspect-square'>
                                        {item.icon}
                                    </button>
                                </div>
                            </th>
                            <td>{item.name}</td>
                        </tr>
                    ) )}
                </tbody>
            </table>
    </div>
  )
}

export default Stack