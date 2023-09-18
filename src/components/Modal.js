import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/slices/management";

function randomCode(lenght) {
  const randomNumber = "0123456789";
  let numbers = "";
  for (let i = 0; i < lenght; i++) {
    numbers += randomNumber.charAt(
      Math.floor(Math.random() * randomNumber.length)
    );
  }
  return numbers;
}

function Modal() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.ui.modalIsOpen);

  if (!modalIsOpen) return null;

  return (
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      className="fixed mt-[25%] ml-[50%] transform -translate-x-1/2 -translate-y-1/2 z-[500]"
    >
      <div className="relative bg-white rounded-lg shadow ">
        <div className="px-10 py-10 text-xl">{randomCode(10)}</div>
        <div className="flex items-center pb-10 space-x-2 rounded-b justify-center ">
          <button
            onClick={() => dispatch(userActions.toggleModal(false))}
            data-modal-toggle="defaultModal"
            type="button"
            className="text-gray-500 bg-red-100 hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:bg-red-200"
          >
            {"Cancelar"}
          </button>
          <a
            onClick={() => dispatch(userActions.toggleModal(false))}
            href="/confirmationPage"
            data-modal-toggle="defaultModal"
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900"
          >
            {"Aceptra"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
