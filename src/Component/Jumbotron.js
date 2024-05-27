import React from "react";
import styled from "styled-components";
import BoatImage from '../img/hamsa.jpg';

const Styles = styled.div `
  .jumbo {
    background: img(${BoatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export default function JumbotronExample() {
    return (

        <Styles>
       <div class="mt-4 p-5 bg-primary text-white rounded">
            <h1>SavellaFish</h1>
            <h2>О компании</h2>
            <p>Наша рыбадобывающая компания работает в каспийском море,имея рыболовецкие суда.</p>

<p>Наша компания предоставляет исключительно высококачественные и сертифицированные товары. Наша цель формирование оптимальных для потребителей цен.</p>

Компания «СавелаФишКомпани» всегда уделяет большое внимание уровню работы с нашими покупателями. Для нас важно, чтобы нашим клиентам было удобно и комфортно работать с нами, поэтому мы разработали систему скидок для постоянных покупателей.<p/>
<p>Также для дополнительного удобства есть услуга отсрочки платежа, так что работать с нами на постоянной основе выгодно. Наша компания сотрудничает с самыми крупными перевозчиками России, что позволяет в короткие сроки найти подходящий транспорт для перевозки груза на ваш склад. Даже минимальный объем для доставки.</p>
</div>    
      
</Styles>

    )
}

