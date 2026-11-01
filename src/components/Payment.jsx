import React, { useState } from "react";

function AccountSection() {
  const [openTarget, setOpenTarget] = useState(null); 
  // null | "groom" | "bride"

  const toggleSection = (target) => {
    setOpenTarget((prev) => (prev === target ? null : target));
  };

  return (
    <section className="account-section" aria-label="마음 전하기">
      <h2 className="account-title">마음 전하기</h2>
      <br />
      {/* 신랑 버튼 */}
      <button
        className={`toggle-account-btn ${openTarget === "groom" ? "active" : ""}`}
        onClick={() => toggleSection("groom")}
      >
        신랑에게 마음 전하는 곳
      </button>

      {/* 신랑 계좌 정보 */}
      {openTarget === "groom" && (
        <div className="account-box fade-account">
          <p className="account-role">신랑측 계좌</p>
          <p className="account-info">
            <span className="account-row">
              <strong>토스뱅크 1000-6087-0659</strong>
              <button
                className="copy-btn-mini"
                onClick={() => {
                  navigator.clipboard.writeText("토스뱅크 1000-6087-0659");
                  alert("신랑측 계좌번호가 복사되었습니다.");
                }}
                aria-label="계좌번호 복사"
              >
                복사
              </button>
            </span>
            <br />
            예금주 : 손석호
          </p>
        </div>
      )}

      {/* 신부 버튼 */}
      <button
        className={`toggle-account-btn ${openTarget === "bride" ? "active" : ""}`}
        onClick={() => toggleSection("bride")}
      >
        신부에게 마음 전하는 곳
      </button>

      {/* 신부 계좌 정보 */}
      {openTarget === "bride" && (
        <div className="account-box fade-account">
          <p className="account-role">신부측 계좌</p>
          <p className="account-info">
            <span className="account-row">
              <strong>토스뱅크 1000-3927-2869</strong>
              <button
                className="copy-btn-mini"
                onClick={() => {
                  navigator.clipboard.writeText("토스뱅크 1000-3927-2869");
                  alert("신부측 계좌번호가 복사되었습니다.");
                }}
                aria-label="계좌번호 복사"
              >
                복사
              </button>
            </span>
            <br />
            예금주 : 이한나
          </p>
        </div>
      )}
    </section>
  );
}

export default AccountSection;
