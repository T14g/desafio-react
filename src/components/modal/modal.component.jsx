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
                <ModalTitle>{showModal.title}</ModalTitle>
                <ModalContent>{showModal.content}</ModalContent>
                <Button onClick={closeModal}>Close</Button>
            </ModalContainer>
        </ModalOverlay>
    ) : null
}

export default Modal;