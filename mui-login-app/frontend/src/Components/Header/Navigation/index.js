import { ShoppingBasket } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

const Navigation = ()=>{
    return(
        <Button color="inherit" size="small" sx={{ backgroundColor: '#DD0000', mr: 2, fontSize: '12px', '&:hover': { backgroundColor: '#BB0000' } }}>
                            <ShoppingBasket sx={{ mr: 1 }} /> {/* Icon Danh Mục */}
                            Danh Mục
                        </Button>
    )


}
export default Navigation;
