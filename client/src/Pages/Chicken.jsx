import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Icon, Image, Link, Select, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { TriangleUpIcon } from '@chakra-ui/icons'
import farmraised from "../Assets/chicken/farmraised.png"
import nochemical from "../Assets/chicken/nochemical.png"
import all from "../Assets/chicken/all.png"
import currycuts from "../Assets/chicken/currycuts.png"
import boneless from "../Assets/chicken/boneless.png"
import spc from "../Assets/chicken/spc.png"
import combo from "../Assets/chicken/combo.png"
import ProductCard from '../Components/ProductCard'
import axios from "axios";
import { useLocation, useSearchParams } from 'react-router-dom'

const Chicken = () => {

//   const data= [
//     {
//         "name": "Chicken Drumstick - Pack Of 6",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d667aa91-ba62-2117-a672-034b58bbac39/original/Chicken-Drumstick---Hero-Shot.jpg",
//         "price": 269,
//         "orgprice": 269,
//         "discount": 0,
//         "desc": "Juicy, meaty pieces by a dedicated team of Nakhrebaaz",
//         "pieces": 6,
//         "weight": 0,
//         "net": "Pieces: 6",
//         "delivery": "Today in-90 min",
//         "category": "Chicken",
//         "subcat": "specialitycut"
//     },
//     {
//         "name": "Chicken Curry Cut - Large Pieces",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/49db5b92-40b1-b9b7-3b1c-09c86daf753f/original/large.jpg",
//         "price": 179,
//         "orgprice": 179,
//         "discount": 0,
//         "desc": "Fresh Nakhre for tender bone-in & boneless chicken cuts",
//         "pieces": 0,
//         "weight": 500,
//         "net": "500gms",
//         "delivery": "Today in-90 min",
//         "category": "Chicken",
//         "subcat": "currycut"
//     },
//     {
//         "name": "Chicken Mince (Keema)",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3e9023d4-e2f7-2fe6-c68f-75014733ff7e/original/Chicken_Mince_Large_Pack_Hero_Shot.jpg",
//         "price": 254,
//         "orgprice": 299,
//         "discount": 15,
//         "desc": "Tender, perfectly ground meat from our Nakhrebaaz team!",
//         "pieces": 0,
//         "weight": 450,
//         "net": "450gms",
//         "delivery": "Today in-90 min",
//         "category": "Chicken",
//         "subcat": "boneless"
//     },
//     {
//         "name": "Chicken Breast Boneless (Large Pack)",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7cb0a040-aaea-f6ed-55a3-7960e4243f54/original/breat.jpg",
//         "price": 469,
//         "orgprice": 469,
//         "discount": 0,
//         "desc": "Tender, boneless fillets of chicken cut from the breast",
//         "pieces": 0,
//         "weight": 900,
//         "net": "900gms",
//         "delivery": "Today in-90 min",
//         "category": "Chicken",
//         "subcat": "boneless"
//     },
//     {
//         "name": "Chicken Leg Curry Cut - Large Pieces",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/cbede953-c94c-3c48-a9a2-bad815fa1c3a/original/ChickenLegCurryCutpiecesHeroShot.jpg",
//         "price": 140,
//         "orgprice": 165,
//         "discount": 15,
//         "desc": "4-6 Large bone-in pieces cut from the leg",
//         "pieces": 0,
//         "weight": 300,
//         "net": "300gms",
//         "delivery": "Today in-90 min",
//         "category": "Chicken",
//         "subcat": "currycut"
//     },
//     {
//         "name": "Chicken Thigh Boneless",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ffd4144f-25a7-6f26-2d90-9a9db0332dda/original/Chicken_Thigh_Boneless_Hero_Shot.jpg",
//         "price": 275,
//         "orgprice": 275,
//         "discount": 0,
//         "desc": "Fresh nakhre for fresh, juicy & tender chicken thigh cuts",
//         "pieces": 0,
//         "weight": 450,
//         "net": "450gms",
//         "delivery": "Today in-90 min",
//         "category": "Chicken",
//         "subcat": "boneless"
//     },
//     {
//         "name": "Chicken Leg With Thigh - Pack of 3",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4ed554d0-383b-219a-b3a4-be7670767b54/original/ChickenLegWholeWithThighHeroShot.jpg",
//         "price": 266,
//         "orgprice": 355,
//         "discount": 25,
//         "desc": "Skinless and bone-in chicken thigh and drumstick with a rich flavour and succulent bite",
//         "pieces": 3,
//         "weight": 0,
//         "net": "Pieces: 3",
//         "delivery": "Today in-90 min",
//         "category": "Chicken",
//         "subcat": "specialitycut"
//     },
//     {
//         "name": "Chicken Mince/Keema - 250 gms (Mini Pack)",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4b4306ae-32da-2543-5a7d-77647cce1de5/original/Chicken_Mince_Large_Pack_Hero_Shot.jpg",
//         "price": 149,
//         "orgprice": 169,
//         "discount": 15,
//         "desc": "Tender, perfectly ground meat from our Nakhrebaa team!",
//         "pieces": 0,
//         "weight": 250,
//         "net": "250gms",
//         "delivery": "Today in-90 min",
//         "category": "Chicken",
//         "subcat": "boneless"
//     },
//     {
//         "name": "Chicken Drumsticks - Pack of 2 (Mini Pack)",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/79841b97-058e-7289-2e3a-42c33c063a83/original/Drumstick_PO2.jpg",
//         "price": 109,
//         "orgprice": 109,
//         "discount": 0,
//         "desc": "Juicy, meaty pieces by a dedicated team of Nakhrebaaz",
//         "pieces": 2,
//         "weight": 0,
//         "net": "Pieces: 2",
//         "delivery": "Today in-90 min",
//         "category": "Chicken",
//         "subcat": "specialitycut"
//     },
//     {
//         "name": "Curry & Keema Special",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/19919f0f-d88b-71d6-e848-c2aff4cccc67/original/CCC_Large_+_Mince_Mini.jpg",
//         "price": 321,
//         "orgprice": 321,
//         "discount": 0,
//         "desc": "Chicken Curry Cut (Large) + Chicken Mince (250g)",
//         "pieces": 0,
//         "weight": 1250,
//         "net": "1250gms",
//         "delivery": "Today in-90 min",
//         "category": "Chicken",
//         "subcat": "combo"
//     },
//     {
//         "name": "Chicken Curry Cut - Full Chicken (Large Pieces)",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/bbe4638d-5346-9ad0-c65e-cc351de63882/original/large.jpg",
//         "price": 299,
//         "orgprice": 299,
//         "discount": 0,
//         "desc": "Approximate Weight: 900 - 1000g",
//         "pieces": 18,
//         "weight": 1000,
//         "net": "Pieces: 18",
//         "delivery": "Today in-90 min",
//         "category": "Chicken",
//         "subcat": "currycut"
//     },
//     {
//         "name": "Chicken Curry Cut - Small Pieces",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg",
//         "price": 179,
//         "orgprice": 179,
//         "discount": 0,
//         "desc": "Fresh Nakhre & fresh bone-in & boneless chicken cuts",
//         "pieces": 0,
//         "weight": 500,
//         "net": "500gms",
//         "delivery": "Tomorrow-6 AM - 8 AM",
//         "category": "Chicken",
//         "subcat": "currycut"
//     },
//     {
//         "name": "Chicken Breast - Boneless",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fcea4075-0ed2-23c1-2b3f-1cddcbd1d11f/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg",
//         "price": 239,
//         "orgprice": 239,
//         "discount": 0,
//         "desc": "Boneless fillets: special nakhre for special cuts",
//         "pieces": 3,
//         "weight": 450,
//         "net": "450gms",
//         "delivery": "Tomorrow-6 AM - 8 AM",
//         "category": "Chicken",
//         "subcat": "boneless"
//     },
//     {
//         "name": "Chicken Lollipop - Pack of 10",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/cae7177f-afbb-e40e-7a27-46fc7d5703a7/original/ChickenLollipopPiecesHeroShot.jpg",
//         "price": 200,
//         "orgprice": 235,
//         "discount": 15,
//         "desc": "Frenched chicken wings with a clean bone for a handle, offering tasty, soft meat in every bite",
//         "pieces": 10,
//         "weight": 0,
//         "delivery": "Tomorrow-6 AM - 8 AM",
//         "category": "Chicken",
//         "subcat": "specialitycut"
//     },
//     {
//         "name": "Chicken Boneless Cubes",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7b633c75-c203-6c03-5234-9fd75467133a/original/Chicken-Boneless---Tikka-Cut--Hero-Shot_(1).jpg",
//         "price": 289,
//         "orgprice": 289,
//         "discount": 0,
//         "desc": "Skinless & boneless Cut & cleaned",
//         "pieces": 0,
//         "weight": 450,
//         "net": "450gms",
//         "delivery": "Tomorrow-6 AM - 8 AM",
//         "category": "Chicken",
//         "subcat": "boneless"
//     },
//     {
//         "name": "Chicken Curry Cut - Full Chicken (Small Pieces)",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ad5b5c59-7393-b780-4f94-14ffe498b753/original/sho.jpg",
//         "price": 299,
//         "orgprice": 299,
//         "discount": 0,
//         "desc": "Approximate Weight: 900 - 1000g",
//         "pieces": 30,
//         "weight": 1000,
//         "net": "Pieces: 30",
//         "delivery": "Tomorrow-6 AM - 8 AM",
//         "category": "Chicken",
//         "subcat": "currycut"
//     },
//     {
//         "name": "Curry & Keema Family Combo",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a1ee5090-73fd-7e81-7318-450b541e1576/original/CCC_Small_+_Mince_Mini.jpg",
//         "price": 321,
//         "orgprice": 321,
//         "discount": 0,
//         "desc": "Chicken Curry Cut (Small) + Chicken Mince (250g)",
//         "pieces": 0,
//         "weight": 750,
//         "net": "750gms",
//         "delivery": "Tomorrow-6 AM - 8 AM",
//         "category": "Chicken",
//         "subcat": "combo"
//     },
//     {
//         "name": "Chicken Curry Cut - Small Pieces (Large Pack)",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4cad2ee9-9257-9109-62a1-da4082b2cf36/original/sho.jpg",
//         "price": 345,
//         "orgprice": 345,
//         "discount": 0,
//         "desc": "Bone-in chunky pieces of skinless chicken",
//         "pieces": 0,
//         "weight": 1000,
//         "net": "1000gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "currycut"
//     },
//     {
//         "name": "Chicken Curry Cut - Large Pieces (Large Pack)",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7c01addb-3cff-9c0a-fa68-d4d6d41de5f5/original/large.jpg",
//         "price": 319,
//         "orgprice": 345,
//         "discount": 7,
//         "desc": "Cut & cleaned bone-in & boneless chicken",
//         "pieces": 0,
//         "weight": 1000,
//         "net": "1000gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "currycut"
//     },
//     {
//         "name": "Chicken Boneless - Mini Bites",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/be46f1fa-1aa8-81ea-7a47-11260815a274/original/Chicken_MiniBites_Boneless_Hero_Shot.jpg",
//         "price": 159,
//         "orgprice": 159,
//         "discount": 0,
//         "desc": "Bite-sized pieces of boneless chicken for pizza & more",
//         "pieces": 0,
//         "weight": 250,
//         "net": "250gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "boneless"
//     },
//     {
//         "name": "Chicken Tangdi Biryani Cut",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b473ac5f-bc3e-9b17-528e-489bd457313c/original/Chicken_Tangdi_Biryani_Cut_Hero_Shot.jpg",
//         "price": 246,
//         "orgprice": 289,
//         "discount": 15,
//         "desc": "Cuts of tender chicken leg, perfect for biryanis",
//         "pieces": 0,
//         "weight": 550,
//         "net": "550gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "specialitycut"
//     },
//     {
//         "name": "Chicken Curry Cut (Large Pcs) +Chicken Mini Bites - Breast Cut (Boneless)",
//         "image": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_g9vks09qawd/1/prod_display_image/1628249559.7172--2021-08-0617:02:39--1818",
//         "price": 328,
//         "orgprice": 338,
//         "discount": 3,
//         "desc": "Cut & cleaned curry pieces and boneless mini bites",
//         "pieces": 0,
//         "weight": 1000,
//         "net": "1000gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "combo"
//     },
//     {
//         "name": "Chicken Curry Cut (Small Pcs) - 500 gms and Chicken Breast Boneless- 450 gms",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/1ebe21bf-dd69-7194-a13d-ab0e85704d1b/original/1598524707.9636--2020-08-2716_08_27--472.jpeg",
//         "price": 384,
//         "orgprice": 384,
//         "discount": 0,
//         "desc": "Curry & steak, cook something new for every meal.",
//         "pieces": 0,
//         "weight": 950,
//         "net": "950gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "combo"
//     },
//     {
//         "name": "Tender Spring Chicken Curry Cut",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fecde0e6-c856-30b4-6b02-1163ed54809a/original/Tender-Spring-Chicken-Curry-Cut-Hero-Shot.jpg",
//         "price": 279,
//         "orgprice": 279,
//         "discount": 0,
//         "desc": "14-16 pieces cut from a whole spring chicken.",
//         "pieces": 14,
//         "weight": 800,
//         "net": "800gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "currycut"
//     },
//     {
//         "name": "Chicken Mince/ Keema (Large Pack)",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/eb67faae-eb04-5a7d-5683-ae90cdd046bf/original/Chicken-Mince_(1).jpeg",
//         "price": 549,
//         "orgprice": 549,
//         "discount": 0,
//         "desc": "Boneless, minced chicken for a variety of dishes",
//         "pieces": 0,
//         "weight": 900,
//         "net": "900gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "boneless"
//     },
//     {
//         "name": "Chicken Fry Cut",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8e06c660-1b00-51d7-f8d6-530691e3e298/original/Chicken_Fry_Cut_Small_Pieces_Hero_Shot.jpg",
//         "price": 149,
//         "orgprice": 149,
//         "discount": 0,
//         "desc": "Small cuts of chicken perfect for frying",
//         "pieces": 0,
//         "weight": 500,
//         "net": "500gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "specialitycut"
//     },
//     {
//         "name": "Chicken Breast Fillet - Thinly Sliced",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/79c12695-de31-056b-0f0e-b6572b609eb1/original/Chicken-Breast-Fillet---Thinly-Sliced-.jpg",
//         "price": 289,
//         "orgprice": 289,
//         "discount": 0,
//         "desc": "Moist tender chicken best for steaks, and BBQ chicken.",
//         "pieces": 0,
//         "weight": 450,
//         "net": "450gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "specialitycut"
//     },
//     {
//         "name": "Chicken Soup Bones - (Classic)",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fba12c61-3179-c768-8cc1-1219501bcef4/original/Chicken-Soup-Bones---(Classic).jpg",
//         "price": 75,
//         "orgprice": 75,
//         "discount": 0,
//         "desc": "11-12 pieces of cleaned bones for chicken stock",
//         "pieces": 11,
//         "weight": 0,
//         "net": "Pieces: 11",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "specialitycut"
//     },
//     {
//         "name": "Chicken Gizzard",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/46bc7883-0675-8e51-2f2d-b2c5d3caaace/original/Chicken_Gizzard_Hero_Shotjpg.jpg",
//         "price": 89,
//         "orgprice": 89,
//         "discount": 0,
//         "desc": "12-14 pieces of Chicken Gizzard",
//         "pieces": 12,
//         "weight": 300,
//         "net": "300gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "specialitycut"
//     },
//     {
//         "name": "Country Chicken Curry Cut (Aseel Cross)",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d08aff2f-47a1-aaa7-3487-2a0a0d67b5df/original/Country_Chicken_Curry_Cut_Hero_Shot.jpg",
//         "price": 415,
//         "orgprice": 415,
//         "discount": 0,
//         "desc": "Lean Country Chicken Curry Cut with a gamey flavour.",
//         "pieces": 0,
//         "weight": 550,
//         "net": "550gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "currycut"
//     },
//     {
//         "name": "Chicken Liver",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/861ceb6e-1a9e-8083-bfbe-955740787dd8/original/Chicken_Liver_Hero_Shot.jpg",
//         "price": 65,
//         "orgprice": 65,
//         "discount": 0,
//         "desc": "Loaded with essential vitamins and minerals like iron and vitamin B12, our chicken liver is fresh, plump and clean.",
//         "pieces": 0,
//         "weight": 350,
//         "net": "350gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "specialitycut"
//     },
//     {
//         "name": "Chicken Leg Boneless - Mini Bites",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ea246bd3-9ffc-2e54-a6f2-53d4bc533921/original/Chicken_MiniBites_Boneless_Hero_Shot.jpg",
//         "price": 175,
//         "orgprice": 175,
//         "discount": 0,
//         "desc": "Bite-sized pieces of boneless chicken, cut from the leg",
//         "pieces": 0,
//         "weight": 250,
//         "net": "250gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "boneless"
//     },
//     {
//         "name": "Chicken Party Combo",
//         "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/75f6a4eb-b854-6268-e994-82e20eb351fc/original/Mini_Bites_+_Mince_Mini.jpg",
//         "price": 368,
//         "orgprice": 368,
//         "discount": 0,
//         "desc": "Chicken Mince (250g) + Chicken Mini Bites",
//         "pieces": 0,
//         "weight": 750,
//         "net": "750gms",
//         "delivery": "Out of Stock",
//         "category": "Chicken",
//         "subcat": "combo"
//     }
//   ]


const [searchParams, setSearchParams]= useSearchParams();

const {location}= useLocation();


 const [data, setData]= useState([]);
 const [currydata, setcurrydata]= useState([]);
 const [bonelessdata, setbonelessdata]= useState([]);
 const [spcdata, setspcdata]= useState([]);
 const [combodata, setcombodata]= useState([]);

 const initSort= searchParams.getAll("sort");
 const initpack= searchParams.getAll("pack");

 const [sortby, setSortby]= useState(initSort || "");
 const [pack, setPack]= useState(initpack || "");

 const [express, setExpress]= useState(false);

 useEffect(()=>{
    let params= {};
    sortby && (params.sort=sortby);
    pack && (params.pack= pack);
    setSearchParams(params);
 }, [sortby, pack, searchParams, setSearchParams])

 const handlePackSize= (e) => {
  setPack(e.target.value);
 }

 const handlesort= (e) => {
  setSortby(e.target.value);
 }

useEffect(()=>{
  if(location || data.length===0){
    const getDataParams={
      params: {
        sort: sortby && sortby,
        pack: pack && pack
      }
    }
    getAllData(getDataParams);
    getCurryData(getDataParams);
    getBonelessData(getDataParams);
    getSpcData(getDataParams);
    getComboData(getDataParams);
  }
}, [data.length, location, searchParams, pack, sortby]);

console.log(data);




const getAllData= (params)=>{
  return axios.get(`https://odd-boa-earrings.cyclic.app/product?category=Chicken`, params)
      .then((r)=>{
        setData(r.data)
      })
      .catch((e)=>console.log(e));
}

  
const getCurryData= ()=>{
    return axios.get(`https://odd-boa-earrings.cyclic.app/product?category=Chicken&subcat=currycut`)
        .then((r)=>{
          setcurrydata(r.data)
        })
        .catch((e)=>console.log(e));
}
    
const getBonelessData= ()=>{
    return axios.get(`https://odd-boa-earrings.cyclic.app/product?category=Chicken&subcat=boneless`)
        .then((r)=>{
          setbonelessdata(r.data)
        })
        .catch((e)=>console.log(e));
}
const getSpcData= ()=>{
    return axios.get(`https://odd-boa-earrings.cyclic.app/product?category=Chicken&subcat=specialitycut`)
        .then((r)=>{
          setspcdata(r.data)
        })
        .catch((e)=>console.log(e));
}
const getComboData= ()=>{
    return axios.get(`https://odd-boa-earrings.cyclic.app/product?category=Chicken&subcat=combo`)
        .then((r)=>{
          setcombodata(r.data)
        })
        .catch((e)=>console.log(e));
}



  return (
    <Box
     bg="#F7F6F6">
      <Box
       w="87%"
        m="auto"
        >
        <Box
          display="flex"
          alignItems="center"
          gap="5px" 
          pt="10px" 
          fontSize={["10px", "12px", "14px"]}
          >
          <Link 
            href="/"
            >
            Home
          </Link>
          <Icon 
            transform="rotate(90deg)" 
            boxSize="10px" 
            as={TriangleUpIcon} 
          />
          <Link 
            href="/chicken" 
            color="#D11243"
            >
            Chicken
          </Link>
        </Box>
        <Box 
        w={["100%", "100%", "70%"]} 
        display="flex" 
        alignItems="center" 
        p="10px 0px" 
        justifyContent="space-between"
        >
          <Text 
            color="#404040" 
            fontWeight="600" 
            fontSize={["18px", "22px", "30px"]}
            >
              Chicken
          </Text>
          <Box 
            display="flex" 
            alignItems="center"
          >
            <Image 
            boxSize={["20px", "30px", "50px"]} 
            src={farmraised} 
            alt="img" 
            />
            <Text color="#404040" fontSize={["10px", "10px", "14px"]}>Farm-raised superior breed</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Image boxSize={["20px", "30px", "50px"]} src={nochemical} alt="img" />
            <Text color="#404040" fontSize={["9px", "10px", "14px"]}>No Added Chemical , Antibiotic residue free.</Text>
          </Box>
        </Box>
        <Divider />
        <Box></Box>
        <Divider />
        <Tabs colorScheme="red">
            <TabList>
                <Tab>
                    <Box display={["inline", "inline", "flex"]} alignItems="center" gap={["", "", "7px"]}>
                        <Image m="auto" boxSize={["30px", "30px", "40px"]} rounded="50%" src={all} alt="img" />
                        <Text color="#404040" fontWeight="600" fontSize={["10px", "12px", "16px"]}>All Chicken</Text>
                    </Box>
                </Tab>
                <Tab>
                    <Box display={["inline", "inline", "flex"]} alignItems="center" gap={["", "", "7px"]}>
                        <Image m="auto" boxSize={["30px", "30px", "40px"]} rounded="50%" src={currycuts} alt="img" />
                        <Text color="#404040" fontWeight="600" fontSize={["10px", "12px", "16px"]}>Curry Cuts</Text>
                    </Box>
                </Tab>
                <Tab>
                    <Box display={["inline", "inline", "flex"]} alignItems="center" gap={["2px", "4px", "7px"]}>
                        <Image m="auto" boxSize={["30px", "30px", "40px"]} rounded="50%" src={boneless} alt="img" />
                        <Text color="#404040" fontWeight="600" fontSize={["10px", "12px", "16px"]}>Boneless & Mince</Text>
                    </Box>
                </Tab>
                <Tab>
                    <Box display={["inline", "inline", "flex"]} alignItems="center" gap={["", "", "7px"]}>
                        <Image m="auto" boxSize={["30px", "30px", "40px"]} rounded="50%" src={spc} alt="img" />
                        <Text color="#404040" fontWeight="600" fontSize={["10px", "12px", "16px"]}>Speciality Cuts</Text>
                    </Box>
                </Tab>
                <Tab>
                    <Box display={["inline", "inline", "flex"]} alignItems="center" gap={["", "", "7px"]} textAlign="center">
                        <Image m="auto" boxSize={["30px", "30px", "40px"]} rounded="50%" src={combo} alt="img" />
                        <Text color="#404040" fontWeight="600" fontSize={["10px", "12px", "16px"]}>Chicken Combos</Text>
                    </Box>
                </Tab>
            </TabList>
            <Box mt="15px" w="100%">
              <Box w={["100%", "100%", "55%"]} color="#5b5757" display="flex" justifyContent="space-between" alignItems="center">
                <Button
                  p={["6px", "8px", "15px"]} 
                  onClick={()=>setExpress(!express)} 
                  fontSize={["13px", "15px", "18px"]} 
                  _hover={{bg: "#f3f2f2"}} 
                  bg={express ? "#fde8ed" : "white"} 
                  border={express ? "1px solid #eb144a": "1px solid #a8a3a8"} 
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  >
                    Express Delivery
                </Button>
                <Select 
                  onChange={handlePackSize}
                  p={["3px", "6px", "9px"]}
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" 
                  fontSize={["13px", "15px", "18px"]} 
                  outline="1px solid #a8a3a8" 
                  bg="white" 
                  w="30%"  
                >
                  <option value="">Pack Size</option>
                  <option value="large">Large Pack</option>
                  <option value="regular">Regular Pack</option>
                </Select>
                <Select 
                  onChange={handlesort}
                  p={["3px", "6px", "9px"]}
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" 
                  fontSize={["13px", "15px", "18px"]} 
                  outline="1px solid #a8a3a8" 
                  bg="white" 
                  w="35%" 
                >
                  <option value="">Sort By Price</option>
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </Select>
              </Box>
            </Box>
            <TabPanels>
                <TabPanel>
                  { data.length===0 ? 
                    <Box w="100%" textAlign="center" mt="10%">
                      <Spinner w="100px" h="100px"
                        thickness='8px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='red.500'
                        size='2xl'
                      />
                    </Box>
                    : 
                    <Box mt="20px">
                        <Box display="grid" gap="20px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
                            {data && data.map((el)=>{
                            return <ProductCard key={el._id} props={el} />
                            })}
                        </Box>
                    </Box>
                  }
                </TabPanel>
                <TabPanel>
                  { currydata.length===0 ? 
                    <Box w="100%" textAlign="center" mt="10%">
                      <Spinner w="100px" h="100px"
                        thickness='8px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='red.500'
                        size='2xl'
                      />
                    </Box>
                    : 
                    <Box mt="20px">
                        <Box display="grid" gap="20px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
                            {currydata && currydata.map((el)=>{
                            return <ProductCard key={el._id} props={el} />
                            })}
                        </Box>
                    </Box>
                  }
                </TabPanel>
                <TabPanel>
                  { bonelessdata.length===0 ? 
                    <Box w="100%" textAlign="center" mt="10%">
                      <Spinner w="100px" h="100px"
                        thickness='8px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='red.500'
                        size='2xl'
                      />
                    </Box>
                    : 
                    <Box mt="20px">
                        <Box display="grid" gap="20px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
                            {bonelessdata && bonelessdata.map((el)=>{
                            return <ProductCard key={el._id} props={el} />
                            })}
                        </Box>
                    </Box>
                  }
                </TabPanel>
                <TabPanel>
                  { spcdata.length===0 ? 
                    <Box w="100%" textAlign="center" mt="10%">
                      <Spinner w="100px" h="100px"
                        thickness='8px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='red.500'
                        size='2xl'
                      />
                    </Box>
                    : 
                    <Box mt="20px">
                        <Box display="grid" gap="20px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
                            {spcdata && spcdata.map((el)=>{
                            return <ProductCard key={el._id} props={el} />
                            })}
                        </Box>
                    </Box>
                  }
                </TabPanel>
                <TabPanel>
                  { combodata.length===0 ? 
                    <Box w="100%" textAlign="center" mt="10%">
                      <Spinner w="100px" h="100px"
                        thickness='8px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='red.500'
                        size='2xl'
                      />
                    </Box>
                    : 
                    <Box mt="20px">
                        <Box display="grid" gap="20px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
                            {combodata && combodata.map((el)=>{
                            return <ProductCard key={el._id} props={el} />
                            })}
                        </Box>
                    </Box>
                  }
                </TabPanel>
            </TabPanels>
        </Tabs>
        <Divider />
      </Box>
    </Box>
  )
}

export default Chicken






{/* <Box w={["95%", "100%", "70%"]} p="10px 0px" display={["grid", "grid", "flex"]} gap={["10px", "10px", ""]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", ""]} justifyContent="space-between">
          <Box display="flex" alignItems="center" gap="7px">
              <Image boxSize="40px" rounded="50%" src={all} alt="img" />
              <Text color="#404040" fontWeight="600" fontSize={["13px", "14px", "16px"]}>All</Text>
          </Box>
          <Box display="flex" alignItems="center" gap="7px">
              <Image boxSize="40px" rounded="50%" src={currycuts} alt="img" />
              <Text color="#404040" fontWeight="600" fontSize={["13px", "14px", "16px"]}>Curry Cuts</Text>
          </Box>
          <Box display="flex" alignItems="center" gap="7px">
              <Image boxSize="40px" rounded="50%" src={boneless} alt="img" />
              <Text color="#404040" fontWeight="600" fontSize={["13px", "14px", "16px"]}>Boneless & Mince</Text>
          </Box>
          <Box display="flex" alignItems="center" gap="7px">
              <Image boxSize="40px" rounded="50%" src={spc} alt="img" />
              <Text color="#404040" fontWeight="600" fontSize={["13px", "14px", "16px"]}>Speciality Cuts</Text>
          </Box>
          <Box display="flex" alignItems="center" gap="7px">
              <Image boxSize="40px" rounded="50%" src={combo} alt="img" />
              <Text color="#404040" fontWeight="600" fontSize={["13px", "14px", "16px"]}>Combos</Text>
          </Box>
        </Box>
        <Divider />
        
        <Box mt="20px">
          <Box display="grid" gap="20px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
            {data && data.map((el)=>{
              return <ProductCard key={el.id} props={el} />
            })}
          </Box>
        </Box> */}
