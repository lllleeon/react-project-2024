import React from "react";
import Card from "./Card";
import apt1 from  '../imgs/apt1.jpg'
import oceanview1 from '../imgs/oceanview1.jpg'
import oceanview2 from '../imgs/oceanview2.jpg'
import oceanview3 from '../imgs/oceanview3.jpg'
import apt2 from '../imgs/apt2.jpg'
import apt3 from '../imgs/apt3.jpg'
import jutack1 from '../imgs/jutack1.jpg'
import jutack2 from '../imgs/jutack2.jpg'
import jutack3 from '../imgs/jutack3.jpg'
import jutack4 from '../imgs/jutack4.jpg'

const listings = [
    {
        id:1,
        title: "서울의앞파트",
        price: 400000,
        rating: 4.9,
        imageUrl: `${apt1}`
    },
    {
        id:2,
        title: "머찐 오션뷰 하나",
        price: 1500000,
        rating: 4.9,
        imageUrl: `${oceanview2}`
    },
    {
        id:3,
        title: "서울근처의 오션뷰 하우스",
        price: 600000,
        rating: 4.9,
        imageUrl: `${oceanview1}`
    },
    {
        id:4,
        title: "세상에 이렇게나 이쁜 오션뷰",
        price: 10000000,
        rating: 4.9,
        imageUrl: `${oceanview3}`
    },
    {
        id:5,
        title: "서울의 이뻐보이는 아파트",
        price: 550000,
        rating: 4.9,
        imageUrl: `${apt2}`
    },
    {
        id:6,
        title: "다 말만 서울이래 아무튼 아파트",
        price: 999999,
        rating: 4.9,
        imageUrl: `${jutack1}`
    },
    {
        id:7,
        title: "이 주택 이쁘죠? 이리로와",
        price: 775744,
        rating: 4.9,
        imageUrl: `${jutack2}`
    },
    {
        id:8,
        title: "고작 30만에 이정도 퀄리티?!",
        price: 300000,
        rating: 4.9,
        imageUrl: `${jutack3}`
    },
    {
        id:9,
        title: "세상 살기 좋아보이는 주택",
        price: 777777,
        rating: 4.9,
        imageUrl: `${jutack4}`
    },
    {
        id:10,
        title: "여기 경치가 아주 좋아 주택",
        price: 1234567,
        rating: 4.9,
        imageUrl: `${apt3}`
    }
];

function CardContainer(){
    return(
        <div className="card-container">
            {listings.map(listings => (
                <Card key={listings.id} {...listings}/>
            ))}
        </div>
    );
}

export default CardContainer;



