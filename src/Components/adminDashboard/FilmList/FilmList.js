import React from "react";
import styled from "styled-components";

const FilmList = () => {
  return (
    <div>
      <FilmListContainer>
        <Product>
          <ProductTitleContainer>
            <ProductTitle>FILM LIST</ProductTitle>
            <Link to="#" />
            <ProductAddButton>Create</ProductAddButton>
          </ProductTitleContainer>
          <ProductTop>
            <ProductTopLeft>
              <Chart
                data={ProductData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </ProductTopLeft>
            <ProductTopRight>
              <ProductInfoTop>
                <ProductInfoImg src="#" alt="" />
                <ProductName>Rushmore</ProductName>
              </ProductInfoTop>
              <ProductInfoBottom>
                <ProductInfoItem>
                  <ProductInfoKey>id:</ProductInfoKey>
                  <ProductInfoValue>123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>sales:</ProductInfoKey>
                  <ProductInfoValue>5123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>active:</ProductInfoKey>
                  <ProductInfoValue>yes</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>in stock:</ProductInfoKey>
                  <ProductInfoValue>no</ProductInfoValue>
                </ProductInfoItem>
              </ProductInfoBottom>
            </ProductTopRight>
          </ProductTop>

          <ProductTop>
            <ProductTopLeft>
              <Chart
                data={ProductData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </ProductTopLeft>
            <ProductTopRight>
              <ProductInfoTop>
                <ProductInfoImg src="#" alt="" />
                <ProductName>The Royal Tenenbaums</ProductName>
              </ProductInfoTop>
              <ProductInfoBottom>
                <ProductInfoItem>
                  <ProductInfoKey>id:</ProductInfoKey>
                  <ProductInfoValue>123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>sales:</ProductInfoKey>
                  <ProductInfoValue>5123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>active:</ProductInfoKey>
                  <ProductInfoValue>yes</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>in stock:</ProductInfoKey>
                  <ProductInfoValue>no</ProductInfoValue>
                </ProductInfoItem>
              </ProductInfoBottom>
            </ProductTopRight>
          </ProductTop>

          <ProductTop>
            <ProductTopLeft>
              <Chart
                data={ProductData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </ProductTopLeft>
            <ProductTopRight>
              <ProductInfoTop>
                <ProductInfoImg src="#" alt="" />
                <ProductName>The Life Aquatic with Steve Zissou</ProductName>
              </ProductInfoTop>
              <ProductInfoBottom>
                <ProductInfoItem>
                  <ProductInfoKey>id:</ProductInfoKey>
                  <ProductInfoValue>123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>sales:</ProductInfoKey>
                  <ProductInfoValue>5123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>active:</ProductInfoKey>
                  <ProductInfoValue>yes</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>in stock:</ProductInfoKey>
                  <ProductInfoValue>no</ProductInfoValue>
                </ProductInfoItem>
              </ProductInfoBottom>
            </ProductTopRight>
          </ProductTop>

          <ProductTop>
            <ProductTopLeft>
              <Chart
                data={ProductData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </ProductTopLeft>
            <ProductTopRight>
              <ProductInfoTop>
                <ProductInfoImg src="#" alt="" />
                <ProductName>The Darjeeling Limited</ProductName>
              </ProductInfoTop>
              <ProductInfoBottom>
                <ProductInfoItem>
                  <ProductInfoKey>id:</ProductInfoKey>
                  <ProductInfoValue>123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>sales:</ProductInfoKey>
                  <ProductInfoValue>5123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>active:</ProductInfoKey>
                  <ProductInfoValue>yes</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>in stock:</ProductInfoKey>
                  <ProductInfoValue>no</ProductInfoValue>
                </ProductInfoItem>
              </ProductInfoBottom>
            </ProductTopRight>
          </ProductTop>

          <ProductTop>
            <ProductTopLeft>
              <Chart
                data={ProductData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </ProductTopLeft>
            <ProductTopRight>
              <ProductInfoTop>
                <ProductInfoImg src="#" alt="" />
                <ProductName>Fantastic Mr. Fox </ProductName>
              </ProductInfoTop>
              <ProductInfoBottom>
                <ProductInfoItem>
                  <ProductInfoKey>id:</ProductInfoKey>
                  <ProductInfoValue>123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>sales:</ProductInfoKey>
                  <ProductInfoValue>5123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>active:</ProductInfoKey>
                  <ProductInfoValue>yes</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>in stock:</ProductInfoKey>
                  <ProductInfoValue>no</ProductInfoValue>
                </ProductInfoItem>
              </ProductInfoBottom>
            </ProductTopRight>
          </ProductTop>

          <ProductTop>
            <ProductTopLeft>
              <Chart
                data={ProductData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </ProductTopLeft>
            <ProductTopRight>
              <ProductInfoTop>
                <ProductInfoImg src="#" alt="" />
                <ProductName>Moonrise Kingdom</ProductName>
              </ProductInfoTop>
              <ProductInfoBottom>
                <ProductInfoItem>
                  <ProductInfoKey>id:</ProductInfoKey>
                  <ProductInfoValue>123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>sales:</ProductInfoKey>
                  <ProductInfoValue>5123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>active:</ProductInfoKey>
                  <ProductInfoValue>yes</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>in stock:</ProductInfoKey>
                  <ProductInfoValue>no</ProductInfoValue>
                </ProductInfoItem>
              </ProductInfoBottom>
            </ProductTopRight>
          </ProductTop>

          <ProductTop>
            <ProductTopLeft>
              <Chart
                data={ProductData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </ProductTopLeft>
            <ProductTopRight>
              <ProductInfoTop>
                <ProductInfoImg src="#" alt="" />
                <ProductName>The Grand Budapest Hotel</ProductName>
              </ProductInfoTop>
              <ProductInfoBottom>
                <ProductInfoItem>
                  <ProductInfoKey>id:</ProductInfoKey>
                  <ProductInfoValue>123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>sales:</ProductInfoKey>
                  <ProductInfoValue>5123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>active:</ProductInfoKey>
                  <ProductInfoValue>yes</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>in stock:</ProductInfoKey>
                  <ProductInfoValue>no</ProductInfoValue>
                </ProductInfoItem>
              </ProductInfoBottom>
            </ProductTopRight>
          </ProductTop>

          <ProductBottom>
            <ProductForm>
              <ProductFormLeft>
                <Label>Film Name</Label>
                <Input type="text" placeholder="Apple AirPod" />
                <Label>In Stock</Label>
                <Select name="inStock" id="idStock">
                  <Option value="yes">Yes</Option>
                  <Option value="no">No</Option>
                </Select>
                <Label>Rated</Label>
                <Select name="active" id="active">
                  <Option value="yes">Yes</Option>
                  <Option value="no">No</Option>
                </Select>
              </ProductFormLeft>
              <ProductFormRight>
                <ProductUpload>
                  <ProductUploadImg src="#" alt="" />
                  <Label for="file">
                    <Publish />
                  </Label>
                  <Input type="file" id="file" style={{ display: "none" }} />
                </ProductUpload>
                <ProductButton>Update</ProductButton>
              </ProductFormRight>
            </ProductForm>
          </ProductBottom>
        </Product>
      </FilmListContainer>
    </div>
  );
};

export default FilmList;

const FilmListContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  position: absolute;
  width: 1296px;
  height: 970px;
  left: 72px;
  top: 146px;

  background: #555555;
  mix-blend-mode: soft-light;
  border-radius: 83px;
`;

// const FilmEditContainer = styled.div`
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   position: absolute;

//   width: 950px;
//   height: 261px;
//   left: 231px;
//   top: 288px;

//   background: #cdc9c3;
//   border-radius: 39px;
// `;

// const FilmInfoContainer = styled.div``;

const Product = styled.div`
  flex: 4;
  padding: 150px;
`;

const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductTitle = styled.h1``;

const ProductAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const ProductTop = styled.div`
  display: flex;
`;

const ProductTopLeft = styled.div`
  flex: 1;
`;

const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const ProductInfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductName = styled.span`
  font-weight: 600;
`;

const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;

const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const ProductInfoKey = styled.span``;

const ProductInfoValue = styled.span`
  font-weight: 300;
`;

const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: gray;
`;

const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const Select = styled.select`
  margin-bottom: 10px;
`;

const Option = styled.option``;

const ProductFormRight = styled.div``;

const ProductUpload = styled.div``;

const ProductUploadImg = styled.img``;

const ProductButton = styled.button``;

const Link = styled.link``;

const Chart = styled.div``;

const Publish = styled.button``;

const ProductData = styled.div``;
