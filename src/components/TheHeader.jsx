import logo from './img/logo.png'
import Modal from "react-modal";
import { useState } from "react";
import BookingForm from './BookingForm';
import Oversigt from './Oversigt';


export default function TheHeader () {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
   
    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
    const openModal2 = () => {
        setModalIsOpen2(true);
      };
    
      const closeModal2 = () => {
        setModalIsOpen2(false);
      };
    
    return (
        <header>
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create booking form"
      >
        <span class="close" onClick={closeModal}>&times;</span>
        <BookingForm closeModal={closeModal} />
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        contentLabel="Create booking form"
        >
          <span class="close" onClick={closeModal2}>&times;</span>
            <Oversigt />
        </Modal>
      
            <div className='header'>
                <img src={logo} className="App-logo" alt="logo" />
                <button className='BookBtn' onClick={openModal}>Book nu</button>
            
                <a className='oversigt' onClick={openModal2} href='#'>Min oversigt</a>
                </div>
                <div className='lokale'>
                    <h1>Lokale information</h1>
                </div>
        </header>
    )
}

