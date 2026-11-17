import React from 'react';
import './App.css';
import MapSection from './components/MapSection';
import Payment from './components/Payment';
import Share from './components/Share';

function Calendar2026Feb() {
  const year = 2026;
  const month = 11; // 0:1월, 1:2월

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const prevLastDate = new Date(year, month, 0).getDate();

  const calendarDays = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevLastDate - i,
      inactive: true,
      key: `prev-${prevLastDate - i}`
    });
  }

  for (let i = 1; i <= lastDate; i++) {
    calendarDays.push({
      day: i,
      inactive: false,
      key: `curr-${i}`
    });
  }

  while (calendarDays.length < 35) {
    calendarDays.push({
      day: "",
      inactive: true,
      key: `next-${calendarDays.length}`
    });
  }

  return (
    <section className="calendar" aria-label="2026년 12월 달력">
      <h2 className="calendar-title">2026년 12월</h2>
      <br />
      <div className="calendar-grid" aria-hidden="true">
        {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
          <div key={d} className="weekday">{d}</div>
        ))}
      </div>

      <div className="date-grid">
        {calendarDays.map(({ day, inactive, key }) => {
          const isToday = !inactive && day === 26;

          return (
            <div
              key={key}
              className={`date-cell ${inactive ? "inactive" : ""} ${isToday ? "today" : ""}`}
              aria-current={isToday ? "date" : undefined}
            >
              {day}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="full-screen-container">
      <main className="wrapper" role="main" aria-label="결혼식 청첩장">

        <section aria-labelledby="date-title">
          <h1 className="date-large" id="date-title">WEDDING DAY</h1>
          <p className="name">석호 <span className="and">그리고</span> 한나</p>
        </section>

        <section className="image-box" aria-label="배경 이미지">
          <img src="./images/99.png" alt="웨딩사진 타이틀" />
        </section>

        <section aria-labelledby="schedule-title">
          <p className="schedule" id="schedule-title">
            2026.12.26 토요일 오후 6시<br />
            규수당 문래점 카이타스홀
          </p>
        </section>

        <section className="greeting-section" aria-label="신랑 신부 인삿말">
          <p className="greeting-title">INVITATION</p>
          
          <p className="greeting-text">
            서로 다른 시간과 계절을 지나<br />
            마침내 서로의 봄이 되었습니다<br /><br />
            함께라서 더 깊어질 일상<br />
            함께라서 더욱 기대되는 내일<br /><br />
            서로의 가장 좋은 친구이자<br />
            평생의 동반자로 살아가겠습니다<br /><br />
            저희의 소중한 시작을 축복해 주세요.<br />
          </p>
          
          <div className="family-info">
            <p className="family-line">
              <span>손병희 · 이순선 의 아들</span>
              <strong>손석호</strong>
            </p>
            <p className="family-line">
              <span>이창수 · 김정희 의 딸</span>
              <strong>이한나</strong>
            </p>
          </div>
        </section>

        <Calendar2026Feb />
     
        <Payment />

        <MapSection /> 

        <Share />
        
      </main>
    </div>
  );
}

export default App;
