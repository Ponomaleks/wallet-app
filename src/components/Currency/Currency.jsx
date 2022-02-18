import React, { useState, useEffect } from 'react';
import { Triangle } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { fetchCurrency } from '../../service/getCurrency';
import { ReactComponent as Waves } from './waves.svg';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import s from './Currency.module.css';

const initialCurrState = {
  buy: null,
  sell: null,
};

export default function Currency() {
  const [USD, setUSD] = useState(initialCurrState);
  const [EUR, setEUR] = useState(initialCurrState);
  const [RUB, setRUB] = useState(initialCurrState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const lastFetched = JSON.parse(localStorage.getItem('currencyFetchTime'));
    const localUSDCurrencyData = JSON.parse(localStorage.getItem('USD'));
    const localEURCurrencyData = JSON.parse(localStorage.getItem('EUR'));
    const localRUBCurrencyData = JSON.parse(localStorage.getItem('RUB'));

    if (!lastFetched && !localUSDCurrencyData) {
      loadCurrencyData();
    }

    const oneHour = 60 * 60000;
    const isFetchNeeded = Date.now() - oneHour >= lastFetched;

    if (isFetchNeeded) {
      localStorage.setItem('currencyFetchTime', JSON.stringify(Date.now()));

      if (isMounted) {
        loadCurrencyData();
        console.log('Date settled and fetch made now');
      }
    }

    if (!isFetchNeeded) {
      setLoading(true);
      setUSD({
        buy: localUSDCurrencyData.buy,
        sell: localUSDCurrencyData.sell,
      });
      setEUR({
        buy: localEURCurrencyData.buy,
        sell: localEURCurrencyData.sell,
      });
      setRUB({
        buy: localRUBCurrencyData.buy,
        sell: localRUBCurrencyData.sell,
      });
      setLoading(false);
    }

    return () => {
      isMounted = false;
      setLoading(false);
    };
  }, []);

  const loadCurrencyData = async () => {
    setLoading(true);

    await fetchCurrency()
      .then(res => {
        res.forEach(currency => {
          if (
            currency.currencyCodeA === 840 &&
            currency.currencyCodeB === 980
          ) {
            setUSD({
              buy: currency.rateBuy,
              sell: currency.rateSell,
            });
            localStorage.setItem(
              'USD',
              JSON.stringify({
                buy: currency.rateBuy,
                sell: currency.rateSell,
              }),
            );
          }
          if (
            currency.currencyCodeA === 978 &&
            currency.currencyCodeB === 980
          ) {
            setEUR({
              buy: currency.rateBuy,
              sell: currency.rateSell,
            });
            localStorage.setItem(
              'EUR',
              JSON.stringify({
                buy: currency.rateBuy,
                sell: currency.rateSell,
              }),
            );
          }
          if (
            currency.currencyCodeA === 643 &&
            currency.currencyCodeB === 980
          ) {
            setRUB({
              buy: currency.rateBuy,
              sell: currency.rateSell,
            });
            localStorage.setItem(
              'RUB',
              JSON.stringify({
                buy: currency.rateBuy,
                sell: currency.rateSell,
              }),
            );
          }
        });
        setLoading(false);
      })
      .catch(error => {
        toast.error(
          'Something went wrong while loading currency data. Please, try again later! 😉',
        );
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      {loading && (
        <Triangle
          height="200"
          width="200"
          color="#ff6596"
          ariaLabel="loading"
          className={s.loader}
        />
      )}
      <div className={s.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Buy</th>
              <th>Sell</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className={s.currencyName}>USD</td>
              <td className={s.currencyBuyValue}>
                {Number(USD.buy).toFixed(2)}
              </td>
              <td className={s.currencySellValue}>
                {Number(USD.sell).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className={s.currencyName}>EUR</td>
              <td className={s.currencyBuyValue}>
                {Number(EUR.buy).toFixed(2)}
              </td>
              <td className={s.currencySellValue}>
                {Number(EUR.sell).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className={s.currencyName}>RUB</td>
              <td className={s.currencyBuyValue}>
                {Number(RUB.buy).toFixed(2)}
              </td>
              <td className={s.currencySellValue}>
                {Number(RUB.sell).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
        <Waves className={s.waves} />
      </div>
    </>
  );
}
