import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from 'actions/categories';

import './index.scss';
import { Typography } from 'antd';

const { Title } = Typography;

function Categories(props) {
  const dispatch = useDispatch();
  const { categories } = props;

  const handleClick = (e) => {
    let categoryId = e.id.toString().substring(1);
    dispatch(setCategoryId(categoryId));
  };

  return (
    <>
      <div className='category-main'>
        <Title className='category-title' level={4}>
          {'Categories'}
        </Title>
        <hr className='category-divider'></hr>
        <div className='category-text'>
          {categories.map((item) => {
            return (
              <Title
                id={`'${item.id}`}
                className='cursor'
                onClick={(e) => handleClick(e.target)}
                level={4}
              >
                {item.name}
              </Title>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Categories;
