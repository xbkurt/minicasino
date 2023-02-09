import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { fetchCategories } from 'actions/categories';
import { logout } from 'actions/logout';
import { clearLoginStatus } from 'actions/login';
import { fetchGames } from 'actions/games';

import Profile from 'partials/profile';
import Categories from 'partials/categories';
import Games from 'partials/games';
import { Input, Typography } from 'antd';
import './index.scss';

const { Title } = Typography;

const { Search } = Input;

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const games = useSelector((state) => state.games.data);
  const status = useSelector((state) => state.logout.status);
  const userData = useSelector((state) => state.login.player);
  const user = useSelector((state) => state.login.player);
  const categoryIdSelector = useSelector(
    (state) => state.categories.categoryId
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [gameResults, setGameResults] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  let localUserInfo = JSON.parse(localStorage.getItem('userInfo'));

  let username =
    Object.keys(userData).length > 0 ? user.username : localUserInfo.username;

  let categoryData = categories.length > 0;
  let gamesData = games.length > 0;

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGames());
    dispatch(clearLoginStatus());
  }, []);

  useEffect(() => {
    let gameResults = games.filter((game) => {
      return (
        game.name
          .toString()
          .toLowerCase()
          .includes(searchQuery.toString().toLowerCase()) ||
        game.name
          .toString()
          .toUpperCase()
          .includes(searchQuery.toString().toUpperCase())
      );
    });
    setGameResults(gameResults);
  }, [games, searchQuery]);

  useEffect(() => {
    setCategoryId(parseInt(categoryIdSelector));
  }, [categoryIdSelector]);

  useEffect(() => {
    if (categoryId) {
      let gameResults = null;

      gameResults = games.filter((game) => {
        return game.categoryIds.includes(categoryId);
      });

      setGameResults(gameResults);
    }
  }, [games, categoryId]);

  if (status === 'success') {
    return <Navigate to={'/login'} />;
  }

  return (
    <>
      <div className='home-container'>
        <div className='profile-info'>
          <Profile />
          <button
            className='center logout-button-style'
            onClick={() => dispatch(logout({ username }))}
          >
            {'< Log Out'}
          </button>
        </div>
        <div className='search-bar'>
          <Search
            type='search'
            name='search'
            id='search-game'
            className='search-item'
            placeholder='Search Game'
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>
      </div>
      <div className='game-body'>
        <div className='games-container'>
          <Title className='game-title' level={3}>
            Casino Games
          </Title>
          <hr className='solid'></hr>
          {gamesData && <Games games={gameResults} />}
        </div>
        {categoryData && (
          <div className='categories-container'>
            <Categories categories={categories} />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
