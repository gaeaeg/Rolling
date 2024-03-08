import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteRecipient } from '../../../api/DeleteApi';
import { Primary56 } from './ButtonStyle';

function DeleteRecipientButton() {
  const navigate = useNavigate();
  const { id: recipientID } = useParams();

  const handleButtonClick = async () => {
    await deleteRecipient(recipientID);
    navigate('/list', { replace: true });
  };

  return <Button onClick={handleButtonClick}>롤링페이퍼 삭제하기</Button>;
}

const Button = styled(Primary56)``;

export default DeleteRecipientButton;
