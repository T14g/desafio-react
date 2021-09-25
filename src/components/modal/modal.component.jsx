import {
    ModalOverlay,
    ModalContainer,
    ModalTitle,
    ModalContent,
    Button
} from './modal.styles';

const Modal = ({ showModal, closeModal }) => {
    const scrolled = window.scrollY;

    return showModal ? (
        <ModalOverlay top={scrolled}>
            <ModalContainer>
                <ModalTitle>Title</ModalTitle>
                <ModalContent>
                    Lorem ipsum dolor sit amet c
                    onsectetur adipisicing elit. Itaque dolorem hic
                    aliquid accusamus commodi quae corporis vitae, providen
                    t ut facere labore! Officia molestiae laudantium to
                    tam eligendi distinctio dolorum atque laboriosam.
                </ModalContent>
                <Button onClick={closeModal}>Close</Button>
            </ModalContainer>
        </ModalOverlay>
    ) : null
}

export default Modal;