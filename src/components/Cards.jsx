import React from 'react'
import Card from './Card'

function Cards() {/*yha par py-32 samj nhi aaya mereko*/
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-32 flex gap-2'>
            <Card width={"basis-1/3"} start={false} para={true} index={1}/>
            <Card width={"basis-2/3"} start={true} para={false} hover="true" index={2}/>
        </div>
    </div>
  )
}

export default Cards