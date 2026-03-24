'use client';

import { useState } from 'react';

function UserInfo({
  email,
  phone,
  birthDate,
}: {
  email: string;
  phone: string;
  birthDate: string;
}) {
  const [userDate, setUserDate] = useState(birthDate);
  const [userEmail, setUserEmail] = useState(email);
  const [userPhone, setUserPhone] = useState(phone);
  return (
    <section className="text-lg">
      {/* <p className="text-lg">Указывайте,пжл, достоверную информацию, чтобы рестораны могли связаться с вами. Вы можете указать номер телефона и/или почту. Указанная дата рождения позволяет вам получить промокод для получения сладкого подарка в одном из ресторанов.</p> */}

      <div className="flex flex-col sm:flex-row my-2 gap-2 lg:justify-between ">
        <div className="flex flex-col gap-2 w-full sm-w-fit ">
          <div className="flex flex-col sm:flex-row gap-2 py-1.5 px-3 text-lg shadow-sm  rounded-md  bg-white  ">
            <label htmlFor="userEmail" className="sm:self-center-safe">
              Электронная почта:{' '}
            </label>
            <input
              className=" text-lg px-2 py-2 underline decoration-sky-500 dark:decoration-darkmode-10  underline-offset-6"
              type="email"
              id="userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 py-1.5 px-3 text-lg  rounded-md bg-white shadow-sm ">
            {phone == null ? (
              <label htmlFor="userTel" className=" sm:self-center-safe">
                Добавьте номер телефона:{' '}
              </label>
            ) : (
              <label htmlFor="userTel" className=" sm:self-center-safe ">
                Номер телефона:{' '}
              </label>
            )}
            <input
              className="text-lg px-2 py-2 underline decoration-sky-500 dark:decoration-darkmode-10  underline-offset-6"
              type="tel"
              id="userTel"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-row sm:flex-col gap-2 h-fit  w-full ">
          <div className="flex flex-col   py-1.5 px-6 text-lg h-fit  rounded-md bg-white shadow-sm  ">
            <label htmlFor="userDateID">Дата рождения </label>
            <input
              type="date"
              name="userDate"
              id="userDateID"
              min="1900-01-01"
              max="2025-01-01"
              value={userDate}
              onChange={(e) => setUserDate(e.target.value)}
            />
          </div>
          <div className=" w-full   rounded-md bg-white   md:h-full md:w-full shadow-sm ">
            <p className="text-center min-h-full sm:bg-amber-100  md:bg-green-100  lg:bg-violet-200 dark:lg:bg-amber-50 rounded-md sm:h-17 place-content-center-safe ">
              70 <span className="font-serif text-blue-600 dark:text-darkmode-10 ">баллов</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserInfo;
