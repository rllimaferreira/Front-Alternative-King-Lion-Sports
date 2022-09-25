import "react-bootstrap/";
import { Card, Button, Container } from "react-bootstrap/";
import { Link } from "react-router-dom";
import EmptyCart from "../../Components/EmptyCart";


export default function Carrinho() {
  return (
    <>
      <Container className="mt-3 mb-3 d-flex flex-column align-items-center">
        <div className="buyingSteps d-none d-md-flex d-xl-flex">
          <div className="steppCarrinho d-flex flex-column align-items-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M7.09977 17.6C5.88981 17.6 4.91085 18.59 4.91085 19.8C4.91085 21.01 5.88981 22 7.09977 22C8.30973 22 9.2997 21.01 9.2997 19.8C9.2997 18.59 8.30973 17.6 7.09977 17.6ZM0.5 0V2.2H2.69992L6.65979 10.549L5.17484 13.244C4.99885 13.552 4.89985 13.915 4.89985 14.3C4.89985 15.51 5.88981 16.5 7.09977 16.5H20.2993V14.3H7.56176C7.40776 14.3 7.28677 14.179 7.28677 14.025L7.31977 13.893L8.30973 12.1H16.5044C17.3294 12.1 18.0554 11.649 18.4294 10.967L22.3672 3.828C22.458 3.66013 22.5037 3.47158 22.4998 3.28078C22.4959 3.08998 22.4426 2.90346 22.345 2.73943C22.2475 2.5754 22.1091 2.43947 21.9433 2.34492C21.7776 2.25037 21.5901 2.20044 21.3993 2.2H5.13084L4.09688 0H0.5ZM18.0994 17.6C16.8894 17.6 15.9105 18.59 15.9105 19.8C15.9105 21.01 16.8894 22 18.0994 22C19.3094 22 20.2993 21.01 20.2993 19.8C20.2993 18.59 19.3094 17.6 18.0994 17.6Z"
                fill="#FF6500"
              ></path>
            </svg>
            <label>Cart</label>
          </div>
          <div className="arrowRight p-1">
            <svg
              width="33"
              height="8"
              viewBox="0 0 33 8"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64644L29.1716 0.464464C28.9763 0.269201 28.6597 0.269201 28.4645 0.464464C28.2692 0.659726 28.2692 0.976308 28.4645 1.17157L31.2929 4L28.4645 6.82842C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.73079 28.9763 7.73079 29.1716 7.53553L32.3536 4.35355ZM4.37114e-08 4.5L32 4.5L32 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                fill="#7F858D"
              ></path>
            </svg>
          </div>
          <div className="steppIdentificacao d-flex flex-column align-items-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
              color="#DEE0E4"
            >
              <path
                d="M9 8.52632C9 13.2272 13.038 17.0526 18 17.0526C22.962 17.0526 27 13.2272 27 8.52632C27 3.82547 22.962 0 18 0C13.038 0 9 3.82547 9 8.52632ZM34 36H36V34.1053C36 26.7935 29.718 20.8421 22 20.8421H14C6.28 20.8421 0 26.7935 0 34.1053V36H34Z"
                fill="#DEE0E4"
              ></path>
            </svg>
            <label className="identificacaoIco">Identification</label>
          </div>
          <div className="arrowRight p-1">
            <svg
              width="33"
              height="8"
              viewBox="0 0 33 8"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64644L29.1716 0.464464C28.9763 0.269201 28.6597 0.269201 28.4645 0.464464C28.2692 0.659726 28.2692 0.976308 28.4645 1.17157L31.2929 4L28.4645 6.82842C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.73079 28.9763 7.73079 29.1716 7.53553L32.3536 4.35355ZM4.37114e-08 4.5L32 4.5L32 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                fill="#7F858D"
              ></path>
            </svg>
          </div>
          <div className="steppPagamento d-flex flex-column align-items-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M32.4 3H3.6C1.602 3 0.018 4.66875 0.018 6.75L0 29.25C0 31.3312 1.602 33 3.6 33H32.4C34.398 33 36 31.3312 36 29.25V6.75C36 4.66875 34.398 3 32.4 3ZM32.4 29.25H3.6V18H32.4V29.25ZM32.4 10.5H3.6V6.75H32.4V10.5Z"
                fill="#DEE0E4"
              ></path>
            </svg>
            <label>Payment</label>
          </div>
          <div className="arrowRight p-1">
            <svg
              width="33"
              height="8"
              viewBox="0 0 33 8"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64644L29.1716 0.464464C28.9763 0.269201 28.6597 0.269201 28.4645 0.464464C28.2692 0.659726 28.2692 0.976308 28.4645 1.17157L31.2929 4L28.4645 6.82842C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.73079 28.9763 7.73079 29.1716 7.53553L32.3536 4.35355ZM4.37114e-08 4.5L32 4.5L32 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                fill="#7F858D"
              ></path>
            </svg>
          </div>
          <div className="steppConfirmacao d-flex flex-column align-items-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M5.1375 7C5.1375 7.47837 5.32696 7.93714 5.6642 8.2754C6.00144 8.61365 6.45884 8.80368 6.93577 8.80368C7.4127 8.80368 7.8701 8.61365 8.20734 8.2754C8.54458 7.93714 8.73404 7.47837 8.73404 7C8.73404 6.52163 8.54458 6.06286 8.20734 5.7246C7.8701 5.38635 7.4127 5.19632 6.93577 5.19632C6.45884 5.19632 6.00144 5.38635 5.6642 5.7246C5.32696 6.06286 5.1375 6.52163 5.1375 7ZM13.9073 6.58451C12.3852 3.36848 10.0843 1.75 7 1.75C3.91404 1.75 1.61482 3.36848 0.0927157 6.58612C0.0316634 6.71579 0 6.85741 0 7.0008C0 7.1442 0.0316634 7.28582 0.0927157 7.41549C1.61482 10.6315 3.91564 12.25 7 12.25C10.086 12.25 12.3852 10.6315 13.9073 7.41388C14.0309 7.15299 14.0309 6.85023 13.9073 6.58451ZM6.93577 9.83436C5.37513 9.83436 4.10992 8.56534 4.10992 7C4.10992 5.43466 5.37513 4.16564 6.93577 4.16564C8.49641 4.16564 9.76162 5.43466 9.76162 7C9.76162 8.56534 8.49641 9.83436 6.93577 9.83436Z"
                fill="#DEE0E4"
              ></path>
            </svg>
            <label>Confirmation</label>
          </div>
          <div className="arrowRight p-1">
            <svg
              width="33"
              height="8"
              viewBox="0 0 33 8"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64644L29.1716 0.464464C28.9763 0.269201 28.6597 0.269201 28.4645 0.464464C28.2692 0.659726 28.2692 0.976308 28.4645 1.17157L31.2929 4L28.4645 6.82842C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.73079 28.9763 7.73079 29.1716 7.53553L32.3536 4.35355ZM4.37114e-08 4.5L32 4.5L32 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                fill="#7F858D"
              ></path>
            </svg>
          </div>
          <div className="steppConclusao d-flex flex-column align-items-center justify-content-between">
            <svg
              width="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM5.83333 15.3242L10.8182 20.6111L22.1667 8.57484L20.6818 7L10.8182 17.4614L7.31818 13.7493L5.83333 15.3242Z"
                fill="#DEE0E4"
              ></path>
            </svg>
            <label>Check-out</label>
          </div>
        </div>

        <Card className="w-100">
          <div className="d-flex m-3 flex-row align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-baseline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
           PRODUCT AND SHIPPING
            </div>
       
            <Button
              className="d-flex justify-content-between align-items-center"
              style={{
                color: " rgb(231, 38, 38)",
                background: "transparent",
                border: "1px solid rgb(231, 38, 38)"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
              EMPTY CART
            </Button>
        
          </div>

          <EmptyCart />
        </Card>
      </Container>
    </>
  );
}
