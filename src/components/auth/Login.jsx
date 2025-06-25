import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FiPhone } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center my-10 bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          Авторизация
        </h1>

        <div className="mt-5">
          <label className="text-gray-700 font-medium">Ваш номер телефона</label>
          <div className="relative mt-2">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FiPhone />
            </span>
            <PhoneInput
              international
              defaultCountry="UZ"
              placeholder="Введите номер телефона"
              value={value}
              onChange={setValue}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            />
          </div>
        </div>

        {value && (
          <p className="mt-4 text-green-600 text-sm">
            Введённый номер: <span className="font-medium">{value}</span>
          </p>
        )}

        <button
          className="mt-6 w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition"
          disabled={!value}
          onClick={() => navigate('/verify')}
        >
          Отправить код
        </button>
      </div>
    </div>
  );
};

export default Login;
