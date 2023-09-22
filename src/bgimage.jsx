import React from 'react';

function Imagebg() {
    const arr = [
        {
            name: 'Home',
            img: 'https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg',
        },
        {
            name: 'about',
            img: 'https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
            name: 'contact',
            img: 'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg',
        },
    ];
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {arr.map((box) => {
                    const { name, img } = box;
                    return (
                        <div
                            key={name}
                            style={{
                                height: '200px',
                                width: '200px',
                                border: '2px solid black',
                            }}
                            onMouseOver={() => {
                                document.querySelector(
                                    'body'
                                ).style.backgroundImage = `url(${img})`;
                            }}
                        >
                            {name}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Imagebg;
