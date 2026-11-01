import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import MapSection from './components/MapSection';
import Payment from './components/Payment';
import Share from './components/Share';

function Calendar2026Feb() {
  const year = 2026;
  const month = 1; // 0:1월, 1:2월

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
    <section className="calendar" aria-label="2026년 2월 달력">
      <h2 className="calendar-title">2026년 2월</h2>
      <br />
      <div className="calendar-grid" aria-hidden="true">
        {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
          <div key={d} className="weekday">{d}</div>
        ))}
      </div>

      <div className="date-grid">
        {calendarDays.map(({ day, inactive, key }) => {
          const isToday = !inactive && day === 28;

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
          <p className="name">성윤 <span className="and">그리고</span> 대희</p>
        </section>

        <section className="image-box" aria-label="배경 이미지">
          <img src="./images/99.jpg" alt="웨딩사진 타이틀" />
        </section>

        <section aria-labelledby="schedule-title">
          <p className="schedule" id="schedule-title">
            2026.02.28 SAT AM 11:30<br />
            빌라드지디 논현
          </p>
        </section>

        <section className="greeting-section" aria-label="신랑 신부 인삿말">
          <p className="greeting-title">INVITATION</p>
          <br />
          <p className="greeting-text">
            7년의 함께함 끝에<br />
            2026년 봄의 시작<br />
            영원을 약속하려고 합니다.<br /><br />
            믿음과 사랑으로 약속하는 날에<br />
            귀한 걸음 하시어<br />
            저희의 사랑의 결실을 축복해주시면<br />
            더없는 기쁨으로 간직하겠습니다.
          </p>
          
          <div className="family-info">
            <p className="family-line">
              <span>김문태 · 조성혜 의 아들</span>
              <strong>김성윤</strong>
            </p>
            <p className="family-line">
              <span>박호영 · 조용효 의 딸</span>
              <strong>박대희</strong>
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
