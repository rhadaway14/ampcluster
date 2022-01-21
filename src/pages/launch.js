import React, {useState, useContext, useEffect} from 'react';
import Signin from '../components/signin/index'



export default function Launch() {


    function get(){
        console.log('please')
    }
    return (
        <>
            <Signin>
                <Signin.Card>
                    <Signin.Title>Launch Cluster</Signin.Title>
                    <Signin.Button onClick={() => get()}/>
                </Signin.Card>
            </Signin>
        </>
    )
}