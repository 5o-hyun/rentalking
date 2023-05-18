import React from "react";
import styled from "styled-components";

const DetailInfo = ({
  selectProduct,
  discountPercent,
  totalPriceSelect,
  periodSelect,
  periods,
  periodActive,
  periodTabActive,
}) => {
  // s3 이미지
  const s3URL = "https://files.usvillage.co.kr";
  return (
    <Container>
      <p className="detailPath">전체 &gt; {selectProduct.categoryParentName}</p>
      <div className="wholeContainer">
        <div className="imgBox">
          <img src={`${s3URL}${selectProduct.imgPath}`} alt="제품이미지" />
        </div>
        <div className="contentsWrapper">
          <p className="title">{selectProduct.name}</p>
          <div className="infoWrapper">
            <p className="infoTitle">상품명</p>
            <p className="infoName">{selectProduct.name}</p>
          </div>
          <div className="infoWrapper">
            <p className="infoTitle">브랜드</p>
            <p className="infoName">{selectProduct.brandName}</p>
          </div>
          {selectProduct.subName !== " " ? (
            <div className="infoWrapper">
              <p className="infoTitle">색상</p>
              <p className="infoName">{selectProduct.subName}</p>
            </div>
          ) : (
            ""
          )}
          <div className="dayPriceWrapper">
            <p className="dayPriceTitle">일일대여가</p>
            <div className="dayPriceGroup">
              <p className="dayPriceBasic">
                {selectProduct.price.toLocaleString()} 원/일
              </p>
              <div className="dayPriceReal">
                <p className="dayPricePercent">{discountPercent}%</p>
                <p className="dayPrice">
                  <b>
                    {(selectProduct.price * totalPriceSelect).toLocaleString()}
                  </b>{" "}
                  원/일
                </p>
              </div>
            </div>
          </div>
          <div className="periodWrapper">
            <p className="periodTitle">
              대여기간
              <span className="periodTitleDesc">
                &#40;일일대여가x{periodSelect}일&#41;
              </span>
            </p>
            <div className="periodGroupWrapper">
              <ul className="periodGroup">
                {periods.map((period, index) => (
                  <li
                    key={index}
                    className={
                      periodActive === period.id ? "period active" : "period"
                    }
                    onClick={() =>
                      periodTabActive(
                        period.id,
                        period.name,
                        period.discount,
                        period.discountPercent
                      )
                    }
                  >
                    {period.name}일
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="infoWrapper">
            <p className="infoTitle">보증금</p>
            <p className="infoName">렌탈료의 5%</p>
          </div>
          <p className="depositDesc">
            *{" "}
            {Math.floor(
              selectProduct.price * totalPriceSelect * periodSelect * 0.05
            )}
            원, 보증금은 렌탈반납시 전액 돌려드립니다.
          </p>
          <button className="submit" type="submit">
            <span className="totalCash">
              총{" "}
              <b>
                {(
                  selectProduct.price *
                  totalPriceSelect *
                  periodSelect
                ).toLocaleString()}
              </b>
              원{" "}
            </span>
            <span>대여하기</span>
          </button>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  p.detailPath {
    font-size: 1.4rem;
    font-weight: 300;
    color: #212721;
    margin-bottom: 1rem;
  }
  .wholeContainer {
    display: flex;
    gap: 6rem;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      gap: 2rem;
    }
    .imgBox {
      width: 43.5rem;
      height: 45rem;
      @media screen and (max-width: 767px) {
        width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .contentsWrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      p.title {
        color: #212721;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 0.1rem solid #ddd;
        @media screen and (max-width: 767px) {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
      }
      .infoWrapper {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        p.infoTitle {
          color: #666;
          font-size: 1.6rem;
          min-width: 10rem;
          @media screen and (max-width: 767px) {
            min-width: 8rem;
            font-size: 1.4rem;
          }
        }
        p.infoName {
          color: #212721;
          font-size: 1.6rem;
          @media screen and (max-width: 767px) {
            font-size: 1.4rem;
          }
        }
      }
      .dayPriceWrapper {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        p.dayPriceTitle {
          color: #666;
          font-size: 1.6rem;
          min-width: 10rem;
          @media screen and (max-width: 767px) {
            font-size: 1.4rem;
            min-width: 8rem;
          }
        }
        .dayPriceGroup {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          p.dayPriceBasic {
            color: #666;
            font-size: 1.4rem;
            text-decoration: line-through;
            @media screen and (max-width: 767px) {
              font-size: 1.2rem;
            }
          }
          .dayPriceReal {
            display: flex;
            align-items: center;
            p.dayPricePercent {
              font-size: 1.8rem;
              font-weight: bold;
              background-color: #f1c40f;
              color: #fff;
              padding: 0 1rem;
              margin-right: 1rem;
              @media screen and (max-width: 767px) {
                font-size: 1.6rem;
                margin-right: 0.8rem;
              }
            }
            p.dayPrice {
              font-size: 1.4rem;
              color: #212721;
              @media screen and (max-width: 767px) {
                font-size: 1.2rem;
              }
              b {
                font-size: 2rem;
                color: #212721;
                @media screen and (max-width: 767px) {
                  font-size: 1.8rem;
                }
              }
            }
          }
        }
      }
      .periodWrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        p.periodTitle {
          color: #666;
          font-size: 1.6rem;
          min-width: 10rem;
          margin-bottom: 2rem;
          @media screen and (max-width: 767px) {
            font-size: 1.4rem;
            min-width: 8rem;
          }
          span.periodTitleDesc {
            font-size: 1.4rem;
            @media screen and (max-width: 767px) {
              font-size: 1.2rem;
            }
          }
        }
        .periodGroupWrapper {
          width: 50rem;
          display: flex;
          justify-content: space-between;
          border: 0.1rem solid #999;
          border-radius: 3rem;
          padding: 2rem;
          position: relative;
          @media screen and (max-width: 1200px) {
            width: auto;
            flex: 1;
          }
          @media screen and (max-width: 767px) {
            padding: 1.5rem;
          }
        }
        ul.periodGroup {
          width: 95%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          li.period {
            font-size: 1.6rem;
            color: #666;
            cursor: pointer;
            @media screen and (max-width: 767px) {
              font-size: 1.4rem;
            }

            &.active {
              background-color: #f1c40f;
              color: #fff;
              font-weight: bold;
              padding: 2rem;
              border-radius: 50%;
              @media screen and (max-width: 767px) {
                padding: 1rem;
              }
            }
          }
        }
      }
      p.depositDesc {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 1rem;
      }
      button.submit {
        box-sizing: border-box;
        appearance: none;
        background-color: transparent;
        border-radius: 0.8rem;
        color: #fff;
        background-color: #f1c40f;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1;
        margin: 2rem 0;
        padding: 1.4rem;
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 700;
        transition: 0.5s;
        width: 54rem;
        @media screen and (max-width: 1200px) {
          width: auto;
          flex: 1;
        }
        @media screen and (max-width: 767px) {
          margin: 1rem 0;
          padding: 1rem;
        }

        &:hover,
        &:focus {
          background-color: #f1b50f;
          outline: 0;
        }

        b {
          font-size: 2.2rem;
          @media screen and (max-width: 767px) {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;

export default DetailInfo;
