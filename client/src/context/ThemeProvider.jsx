"use client"

import { useState, useEffect } from 'react';
import { MyContext } from "./ThemeContext";
import axios from 'axios';
import { fetchDataFromApi } from '@/utils/api';
import { postData } from '@/utils/api';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ThemeProvider = ({ children }) => {

  const [productData, setProductData] = useState([]); 
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [headerSearchCatListValue, setHeaderSearchCatListValue] = useState("");

  const [searchKeyword, setsearchKeyword] = useState();
  const [searchData, setSearchData] = useState([]);

  const [cartTotalAmount, setCartTotalAmount] = useState();
  
  const [snackbar, setSnackbar] = useState({
    color:'',
    msg:'',
    isOpen:null
  });


  const [isLogin, setIsLogin] = useState();
  const [isOpenFilters, setIsopenFilters] = useState(false);

  useEffect(() => {

    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
    let userId=localStorage.getItem('userId');
    getCartData(`/api/cart-datas?populate=*&[filters][userId]=${userId}`);
 
  }, []);

  const getCartData = (url) => {
    fetchDataFromApi(url).then(res => {
      setCartItems(res.data);
    })
  }



  const addToCart = async (item) => {

    //setCartItems([...cartItems, { ...item, quantity: 1 }])

    const cart_Data = {
      data: {
        productName: item.attributes.name,
        price: parseInt(item.attributes.price),
        oldPrice: parseInt(item.attributes.oldPrice),
        product_weight: '',
        productSize: '',
        productRAM: '',
        discount: item.attributes.discount,
        brand: item.attributes.brand,
        rating: item.attributes.rating,
        description: item.attributes.description,
        quantity: 1,
        imgUrl: item.attributes.productImages.data[0].attributes.url,
        productId: item.id,
        products: item.id,
        userId: localStorage.getItem('userId')//konsa product kis user ne add
      }
    }




    postData("/api/cart-datas", cart_Data).then(res => {
     
    })

    getCartData(`/api/cart-datas`);

  }




  const signIn = () => {
    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ 
      isOpen:false,
      msg:'',
      color:'' });

    };

  const signOut = () => {
    localStorage.clear();
    // localStorage.removeItem('isLogin');
    setIsLogin(false);
  }


  const openFilters = () => {
    setIsopenFilters(!isOpenFilters)
  }

  const value = {
    productData,
    setProductData,
    cartItems,
    isLogin,
    windowWidth,
    isOpenFilters,
    addToCart,
    signOut,
    signIn,
    openFilters,
    headerSearchCatListValue,
    setHeaderSearchCatListValue,
    setSearchData,
    searchData,
    setsearchKeyword,
    searchKeyword,
    setCartItems,
    getCartData,
    setCartTotalAmount,
    cartTotalAmount,
    setSnackbar,snackbar
  };
  return (
    <MyContext.Provider value={value}>
   <Snackbar open={snackbar.isOpen} autoHideDuration={6000} onClose={handleClose}
   className='snackbar'>
        <Alert
          onClose={handleClose}
          severity={snackbar.color}
          variant="filled"
          sx={{ width: '100%' }}
        >
         {snackbar.msg}
        </Alert>
      </Snackbar>
      {children}
    </MyContext.Provider>
  )
}

export default ThemeProvider;