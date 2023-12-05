import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import './style.css';

export const InputDate = () => {
  const [startDate, setStartDate] = useState(null);
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  return (
    <div className="field input-date">
      <label className="field__label input-date__label" htmlFor="date">
        Odlet nejdříve *
        <DatePicker
          {...register('date', {
            required: true,
          })}
          className="input-date__picker"
          showIcon
          name="date"
          selected={startDate}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setStartDate(date);
            setValue('date', date, { shouldValidate: true });
          }}
          minDate={new Date()}
          placeholderText=" Vyberte datum"
        />
      </label>
    </div>
  );
};
