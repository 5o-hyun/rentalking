import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/base/Header';
import ListItem from '../components/ListItem';

const ListPage = () => {
  const [list, setList] = useState();

  useEffect(() => {
    axios.get('https://api.usvillage.co.kr/api/v1/rentals').then((response) => {
      if (response.status === 200) {
        setList(response.data.data);
      }
    });
  }, []);
  // console.log(list);

  if (!list) return <div>loading</div>;

  return (
    <Container>
      <Header />
      <div className="listWrapper">
        {list.map((item, index) => (
          <Link to={`/list/${item.id}`} key={index}>
            <ListItem
              imgPath={item.imgPath}
              brandName={item.brandName}
              name={item.name}
              subName={item.subName}
              price={item.price}
              minPrice={item.minPrice}
            ></ListItem>
          </Link>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 120px;
  .listWrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    a {
      text-decoration: none;
    }
  }
`;

export default ListPage;
