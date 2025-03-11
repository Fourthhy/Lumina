import { ModalProvider } from './ModalContext';
import BoardSelection from '../pages/BoardSelection';

export default function ModalBoardProvider() {
    return (
        <ModalProvider>
            <BoardSelection />
        </ModalProvider>
    );
}
