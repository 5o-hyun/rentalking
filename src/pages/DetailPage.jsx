import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const DetailPage = () => {
  const s3URL = 'https://files.usvillage.co.kr';
  const { listId } = useParams();
  const [itemInfo, setItemInfo] = useState();

  useEffect(() => {
    axios
      .get(`https://api.usvillage.co.kr/api/v1/rentals/${listId}`)
      .then((response) => {
        if (response.status === 200) {
          setItemInfo(response.data.data);
        }
      });
  }, []);

  // useEffect(() => {
  //   async function getItem() {
  //     try {
  //       const response = await axios.get(
  //         `https://api.usvillage.co.kr/api/v1/rentals/${listId}`
  //       );
  //       setItemInfo(response.data.data);
  //     } catch (error) {
  //       console.error('error');
  //     }
  //   }
  //   getItem();
  // }, []);

  console.log(itemInfo);

  if (!itemInfo) return null;

  return (
    <Container>
      <div className="cardWrapper">
        <Link to={-1}>
          <button className="backBtn">
            <AiOutlineArrowLeft />
          </button>
        </Link>
        <div className="imgBox">
          <img src={`${s3URL}${itemInfo.imgs[0]}`} alt="" />
        </div>
        <div className="contentsBox">
          <p className="name">{itemInfo.name}</p>
          <p className="subName">{itemInfo.subName}</p>
          <p className="brandName">{`[ ${itemInfo.brandName} ]`}</p>
          <p className="price">{`정상가 : ${itemInfo.price} 원`}</p>
          <p className="priceSale">{`할인가 : ${itemInfo.price} 원`}</p>
          <p className="pickUpLocation">{itemInfo.pickUpLocation}</p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ddd;
  .cardWrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 500px;
    padding: 50px 20px;
    text-align: center;
    background-color: #f5f5f5;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    button.backBtn {
      background-color: transparent;
      border: 0;
      margin-bottom: 20px;
      cursor: pointer;
      svg {
        width: 25px;
        height: 25px;
      }
    }
    .imgBox {
      width: 80%;
      height: 300px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .contentsBox {
      padding: 30px 0;
      p {
        margin: 0;
      }
      p.name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 4px;
      }
      p.subName {
        font-size: 18px;
        font-weight: bold;
        color: #aaa;
        margin-bottom: 16px;
      }
      p.brandName {
        color: #666;
        margin-bottom: 8px;
      }
      p.price {
        font-size: 20px;
        font-weight: bold;
        color: #212721;
        text-decoration: line-through;
      }
      p.priceSale {
        font-size: 20px;
        font-weight: bold;
        color: crimson;
        margin-bottom: 8px;
      }
    }
  }
`;

export default DetailPage;
