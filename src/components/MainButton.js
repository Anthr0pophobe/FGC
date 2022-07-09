import React from 'react';
import Button from '@mui/material/Button';

const MainButton = (data) => {
  return (
    <>
      <Button className='w-32 ' size='large' variant="contained" style={{backgroundColor:'#fcba03', color:'black'}}>{data.nom}</Button>
    </>
  )
}

export default MainButton