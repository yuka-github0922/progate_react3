import React from 'react';
import {useState} from 'react';

const Lesson = (props) =>{
  // stateは状態だけ扱う
  const [showModal, setShowModal] = useState(false)

  // ボタンをクリックしたときのハンドラー
  const handleButtonClick = () => {
    setShowModal(true)
  }

  // モーダルの「とじる」をクリックしたときのハンドラー
  const handleCloseButton = () => {
    setShowModal(false)
  }

  return(
    <React.Fragment>
      <div className='lesson-card'>
        <button
          className='lesson-item'
          onClick={handleButtonClick}
        >button</button>
        <p>{props.name}</p>
        <img src={props.image} />
        {/*{modal}*/}
        {showModal && (
          <div className='modal'>
            <div className='modal-inner'>
              <div className='modal-header'></div>
              <div className='modal-introduction'>
                <h2>{props.name}</h2>
                <p>{props.introduction}</p>
              </div>
              <button
                className='modal-close-btn'
                onClick={handleCloseButton}
              >
                とじる
              </button>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
export default Lesson;

// const Lesson extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isModalOpen: false};
//   }
//   handleClickLesson() {
//     this.setState({isModalOpen: true});
//   }
  
//   // handleClickCloseメソッドを定義してください
//    handleClickClose() {
//     this.setState({isModalOpen: false});
//   }

//   render() {
//     let modal;
//     if (this.state.isModalOpen) {
//       modal = (
//         <div className='modal'>
//           <div className='modal-inner'>
//             <div className='modal-header'></div>
//             <div className='modal-introduction'>
//               <h2>{this.props.name}</h2>
//               <p>{this.props.introduction}</p>
//             </div>
//             {/* onClickイベントを追加してください */}
//             <button
//               className='modal-close-btn'
//               onClick={()=>{this.handleClickClose()}}

//             >
//               とじる
//             </button>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className='lesson-card'>
//         <div
//           className='lesson-item'
//           onClick={() => {this.handleClickLesson()}}
//         >
//           <p>{this.props.name}</p>
//           <img src={this.props.image} />
//         </div>
//         {modal}
//       </div>
//     );
//   }
// }

