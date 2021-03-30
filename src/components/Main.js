import React from 'react';
import Lesson from './Lesson';
import {MainTitle} from './atoms/MainTitle'
import styles from './Main.module.css'

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
        introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
      },
      {
        name: 'Sass',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
        introduction: 'SassはCSSをより便利に効率的にするための言語です。',
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
        introduction: 'JavaScriptはフロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語です。',
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
        introduction: 'ReactはHTMLのように、サイトの見た目をつくることができるJavaScriptのライブラリです。',
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <MainTitle className={styles.mainHeading}>Hello, World.</MainTitle>
            <h2>プログラミングの世界へようこそ！</h2>
          </div>
          <div className='lesson-container'>
            <h3>学べるレッスン</h3>
            {lessonList.map((lessonItem,index) => {
              return (
                <Lesson
                  name={lessonItem.name}
                  image={lessonItem.image}
                  introduction={lessonItem.introduction}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
