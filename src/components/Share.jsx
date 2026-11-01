import React, { useEffect } from "react";

function Share() {
  useEffect(() => {
    // SDK 중복 로딩 방지
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.async = true;
      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init("91e36f4d5920813845d6ebe0ea0c48f6"); // ← 여기에 본인 JS key
        }
      };
      document.head.appendChild(script);
    } else {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("91e36f4d5920813845d6ebe0ea0c48f6"); // ← 여기에 본인 JS key
      }
    }
  }, []);

  // 공유 함수
  const handleShare = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "석호♥한나, 12월 26일 결혼해요 💍",
        description: "규수당 문래점 카이타스홀 · 오후 6시",
        imageUrl: "https://pdh1219.github.io/wedding-invite-hn/images/999.jpg", // 원하는 이미지 URL 입력
        link: {
          mobileWebUrl: 'https://pdh1219.github.io/wedding-invite-hn/',
          webUrl: 'https://pdh1219.github.io/wedding-invite-hn/',
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: 'https://pdh1219.github.io/wedding-invite-hn/',
            webUrl: 'https://pdh1219.github.io/wedding-invite-hn/',
          },
        },
      ],
    });
  };

  return (
    <div className="share-wrapper" style={{ textAlign: "center", margin: "30px 0" }}>
      <button
        onClick={handleShare}
        className="toggle-account-btn"
      >
        카카오톡 공유하기
      </button>
    </div>
  );
}

export default Share;
