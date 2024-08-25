"use client";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';  // Correct import for client components
import { MyContext } from '@/context/ThemeContext';
import Script from 'next/script';
import { postData } from '@/utils/api';

const Checkout = () => {
    const [formFields, setFormFields] = useState({
        name: '',
        pincode: '',
        address: '',
        phoneNumber: ''
    });

    const context = useContext(MyContext);
    const router = useRouter();  // Initialize useRouter

    const placeOrder = () => {
        if (formFields.name === "" || formFields.address === "" || formFields.pincode === "" || formFields.phoneNumber === "") {
            alert("All fields are required");
            return false;
        }

        const addressInfo = {
            name: formFields.name,
            phoneNumber: formFields.phoneNumber,
            address: formFields.address,
            pincode: formFields.pincode,
            date: new Date().toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
            })
        };

        var options = {
            key: "rzp_test_jRxKhbMARd2ues",
            key_secret: "NwxWN5OTVYCygRxlQrKs4xWi",
            amount: parseInt(context.cartTotalAmount * 100),
            currency: "INR",
            order_receipt: 'order_rcptid_' + formFields.name,
            name: "E-Bharat",
            description: "for testing purpose",
            handler: function (response) {
                const paymentId = response.razorpay_payment_id;

                const orderInfo = {
                    cartItems: context.cartItems,
                    addressInfo: addressInfo,
                    date: new Date().toLocaleString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }),
                    email: localStorage.getItem("userEmail"),
                    userId: localStorage.getItem("userId"),
                    paymentId: paymentId
                };

                const payLoad = {
                    data: {
                        userName: addressInfo.name,
                        email: localStorage.getItem("userEmail"),
                        phone: addressInfo.phoneNumber,
                        address: addressInfo.address,
                        totalOrderAmount: context.cartTotalAmount,
                        userId: localStorage.getItem("userId"),
                        paymentId: paymentId,
                        pincode: addressInfo.pincode,
                        products: context.cartItems,
                        date: new Date().toLocaleString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        }),
                    }
                };

                postData("/api/orders", payLoad).then(res => {
                    console.log(res);
                    router.push('/');  // Redirect to home page after successful payment
                });
            },
            theme: {
                color: "#3399cc"
            }
        };

        var pay = new window.Razorpay(options);
        pay.open();
        console.log(pay);
    };

    const changeInput = (e) => {
        const { name, value } = e.target;
        setFormFields(prevFields => ({
            ...prevFields,
            [name]: value
        }));
    };

    return (
        <>
            <section className='cartSection mb-5 checkoutPage'>
                <div className='container'>
                    <form>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div className='form w-75 mt-4 shadow'>
                                    <h3>Shopping Address</h3>
                                    <div className='form-group mb-3 mt-3'>
                                        <TextField id="outlined-basic" label="Enter Full Name" variant="outlined" className='w-100' value={formFields.name} onChange={changeInput} name="name" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <TextField id="outlined-basic" label="Enter Pincode" variant="outlined" className='w-100' value={formFields.pincode} onChange={changeInput} name="pincode" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <TextField id="outlined-basic" label="Enter Phone Number" variant="outlined" className='w-100' value={formFields.phoneNumber} onChange={changeInput} name="phoneNumber" />
                                    </div>
                                    <div className='form-group'>
                                        <TextField id="outlined-basic" label="Enter Full Address" variant="outlined" className='w-100' multiline rows={4} value={formFields.address} onChange={changeInput} name="address" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 cartRightBox'>
                                <div className='card p-4 '>
                                    <div className='d-flex align-items-center mb-4'>
                                        <h5 className='mb-0 text-light'>Subtotal</h5>
                                        <h3 className='ml-auto mb-0 font-weight-bold'><span className='text-g'>{context.cartTotalAmount}</span></h3>
                                    </div>
                                    <div className='d-flex align-items-center mb-4'>
                                        <h5 className='mb-0 text-light'>Shipping</h5>
                                        <h3 className='ml-auto mb-0 font-weight-bold'><span>Free</span></h3>
                                    </div>
                                    <div className='d-flex align-items-center mb-4'>
                                        <h5 className='mb-0 text-light'>Total</h5>
                                        <h3 className='ml-auto mb-0 font-weight-bold'><span className='text-g'>{context.cartTotalAmount}</span></h3>
                                    </div>
                                    <br />
                                    <Button className='btn-g btn-lg' onClick={placeOrder}>Place Order</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        </>
    );
}

export default Checkout;
