import { Search } from '@mui/icons-material';
import { Box, List, ListItem, ListItemText, Paper, Popper, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';

const SearchBox = () => {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [products] = useState([
        'Sản phẩm 1',
        'Sản phẩm 2',
        'Sản phẩm 3',
        'Sản phẩm 4',
        'Sản phẩm 5',
    ]);

    const inputRef = useRef(null); // Tham chiếu đến phần tử đầu vào

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        setOpen(event.target.value.length > 0); // Hiện Popper khi có văn bản
    };

    const filteredProducts = products.filter(product =>
        product.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Box sx={{ position: 'relative', width: '400px' }}> {/* Đặt chiều rộng cho Box để phù hợp với thanh tìm kiếm */}
            <TextField
                variant="outlined"
                placeholder="Tìm kiếm sản phẩm..."
                size="small"
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    width: '100%', // Sử dụng chiều rộng 100% để mở rộng theo Box
                    fontSize: '12px',
                }}
                InputProps={{
                    startAdornment: (
                        <Search sx={{ mr: 1 }} />
                    ),
                }}
                onChange={handleInputChange}
                inputRef={inputRef} // Tham chiếu đến input để dùng làm anchor cho Popper
            />
            <Popper open={open} placement="bottom-start" anchorEl={inputRef.current}> {/* Căn chỉnh Popper với thanh tìm kiếm */}
                <Paper>
                    <List sx={{ maxHeight: '200px', overflowY: 'auto' }}> {/* Giới hạn chiều cao và cuộn nếu cần */}
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                                <ListItem button key={index}>
                                    <ListItemText primary={product} />
                                </ListItem>
                            ))
                        ) : (
                            <ListItem>
                                <ListItemText primary="Không có sản phẩm nào" />
                            </ListItem>
                        )}
                    </List>
                </Paper>
            </Popper>
        </Box>
    );
};

export default SearchBox;
