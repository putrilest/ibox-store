// import React from 'react'
import { useState } from "react";
import Card from "../../components/Card";
import './dashboard.css'
import {useNavigate} from 'react-router-dom'

const products = [
    {
      id: 1,
      name: "MacBook Air 15”",
      image: "/macbook_air_15.jpg",
      price: 26999999,
    },
    {
      id: 2,
      name: "iPhone 14 Pro",
      image: "/iphone_14_pro.jpg",
      price: 19999999,
    },
    {
      id: 3,
      name: "iPhone 14",
      image: "/iphone_14.jpg",
      price: 15999999,
    },
    {
      id: 4,
      name: "Apple Vision Pro",
      image: "/apple_vision_pro.jpg",
      price: 66999999,
    },
    {
      id: 5,
      name: "Apple Watch Series 8",
      image: "apple_watch_series_8.jpg",
      price: 7999999,
    },
    {
      id: 6,
      name: "iPad Pro",
      image: "/ipad_pro.jpg",
      price: 15999999,
    },
    {
      id: 7,
      name: "MacBook Air 15”",
      image: "/macbook_air_15.jpg",
      price: 26999999,
    },
    {
      id: 8,
      name: "iPhone 14 Pro",
      image: "/iphone_14_pro.jpg",
      price: 19999999,
    },
    {
      id: 9,
      name: "iPhone 14",
      image: "/iphone_14.jpg",
      price: 15999999,
    },
    {
      id: 10,
      name: "Apple Vision Pro",
      image: "/apple_vision_pro.jpg",
      price: 66999999,
    },
    {
      id: 11,
      name: "Apple Watch Series 8",
      image: "apple_watch_series_8.jpg",
      price: 7999999,
    },
    {
      id: 12,
      name: "iPad Pro",
      image: "/ipad_pro.jpg",
      price: 15999999,
    },
  ];

const Dashboard = () => {
    const [searchProduct, setSeacrhProduct] = useState('');
    const [sortBy, setSortBy] = useState('id')
    const [typeSort, setTypeSort] = useState('asc')
    const navigate = useNavigate()

    let productBiasa = products.toSorted((a,b) => {
        if(typeSort == 'asc'){
            return a[sortBy] < b[sortBy] ? -1 : 1;
        }else{
            return a[sortBy] > b[sortBy] ? -1: 1;
        }
    }).filter((product) => product.name.toLowerCase().includes(searchProduct))

    const toDetailProduk = (e) => {
        navigate(`/detail-produk/${e}`)
    }

  return (
    <div>
        <div className="wrapper-action">
            <div>
                <label htmlFor="">Cari Produk </label>
                <input type="text" value={searchProduct} onChange={(e) => setSeacrhProduct(e.target.value)}/> 
            </div>
            <select name="sortingBy" id="sortingBy" onChange={(e) => setSortBy(e.target.value)}>
                <option value="id">ID</option>
                <option value="id">Nama Produk</option>
                <option value="id">Harga Produk</option>
            </select>
            <select name="sort" id="sort" onChange={(e) => setTypeSort(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
        <div className='wrapper-product'>
        {
            productBiasa.map((product) => {
                return <>
                    <Card key={product.id}> 
                        <img className='card-img' src={product.image} alt={product.name} />
                        <p className='card-name'>{product.name}</p>
                        <p className='card-price'>Rp{product.price.toLocaleString('Id-ID')}</p>
                        <button onClick={() => toDetailProduk(product.id)}>Detail Produk</button>
                    </Card>
                </>
            })
        }
        </div>
    </div>
  )
}

export default Dashboard