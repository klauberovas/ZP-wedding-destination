import './style.css';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '../../../../../../components/ErrorMessage';

export const TextArea = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="textarea field">
      <label htmlFor="message" className="textarea__label field__label">
        Zpráva * <br/>
        (...vaše představa svatby, zájezdu atd.)
      </label>
      <textarea
        className="textarea__input field__input"
        {...register('message', {
          required: true,
        })}
        id="message"
        name="message"
        rows="7"
        cols="40"
      ></textarea>
      {errors['message'] && (
        <ErrorMessage text={'*Toto pole je povinné'} center={false} />
      )}
    </div>
  );
};
