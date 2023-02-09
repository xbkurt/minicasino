import React, { useState } from 'react';
import { Typography } from 'antd';

import { getGameImage } from 'utils';
import './index.scss';

const { Title } = Typography;

function Games(props) {
  const { games } = props;
  const [launchGame, setLaunchGame] = useState(false);
  const [eventId, setEventId] = useState('');

  const handeClick = (event) => {
    setEventId(event.id);
    setLaunchGame(true);
  };

  return (
    <div className='gameitem-container'>
      {games.map((item, index) => {
        return (
          <>
            <div className='game-flex'>
              <div className='game-img'>
                <img src={getGameImage(index)} alt='game'></img>
              </div>
              <div className='game-content'>
                <Title className='game-name' level={4}>
                  {item.name}
                </Title>
                <Title className='game-desc' level={5}>
                  {item.description}
                </Title>
                <button
                  id={`'${item.code}`}
                  name='play-button'
                  onClick={(e) => handeClick(e.target)}
                  className={`play-button-style ${
                    launchGame && 'display-none'
                  }`}
                >
                  {'Play >'}
                </button>
                {launchGame &&
                  `'${item.code}`.toString().includes(eventId.toString()) && (
                    <div className='launched-game'>
                      <object
                        id='game-launch'
                        data={`comeon.game.launch('${item.code}')`}
                        width='500'
                        height='400'
                        disabled={true}
                      ></object>
                    </div>
                  )}
              </div>
            </div>
            <hr className='game-divider'></hr>
          </>
        );
      })}
    </div>
  );
}

export default Games;
