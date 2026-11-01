import React, { useEffect } from "react";

//91e36f4d5920813845d6ebe0ea0c48f6

function MapSection() {
  useEffect(() => {
    const initMap = () => {
      if (!window.kakao || !window.kakao.maps) return;

      const { kakao } = window;
      const container = document.getElementById("map");
      if (!container) return;

      const lat = 37.517765;
      const lng = 126.900107;

      const destination = new kakao.maps.LatLng(lat, lng);

      const map = new kakao.maps.Map(container, {
        center: destination,
        level: 5,
      });

      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      const marker = new kakao.maps.Marker({
        map,
        position: destination,
        title: "규수당 문래점",
      });

      // 🟡 지도 클릭 시 카카오맵 이동
      kakao.maps.event.addListener(map, "click", function () {
        const goMap = window.confirm(
          "카카오맵에서 위치를 확인하시겠습니까?"
        );

        if (goMap) {
          window.open(
            `https://map.kakao.com/link/map/규수당 문래점,${lat},${lng}`,
            "_blank"
          );
        }
      });
    };

    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(initMap);
      } else {
        const script = document.createElement("script");
        script.id = "kakao-map-sdk";
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=91e36f4d5920813845d6ebe0ea0c48f6&libraries=services&autoload=false";
        script.async = true;
        script.onload = () => {
          window.kakao.maps.load(initMap);
        };
        document.head.appendChild(script);
      }
    };

    loadKakaoMap();
  }, []);

  return (
    <div className="map-section-wrapper">
      <h3 className="map-title">오시는 길 안내</h3>
      <br />

      <div
        id="map"
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "8px",
        }}
      ></div>

      {/* 🟡 여기서부터 ↓ 교통편 안내 섹션 */}
      <div
        className="transport-info"
        style={{
          marginTop: "16px",
          padding: "14px",
          background: "#f9f9f9",
          borderRadius: "8px",
          lineHeight: "1.6",
          fontSize: "14px",
          color: "#444",
        }}
      >
        <strong style={{ fontSize: "15px" }}>규수당 문래점</strong>
        <div>· 서울 영등포구 문래로 164, SK리더스뷰 2층</div>
        <div>· 02-332-9000</div>

        <br />

        <strong style={{ fontSize: "15px" }}>대중교통 이용시</strong>
        <div>· 2호선 문래역 하차<br /></div>
        <div>· [셔틀버스] 4번출구(뒷쪽) 셔틀버스 운행</div>
        <div>· [버스] 3번출구 영등포05 , 지선6625</div>
        <div>· [도보] 5번출구 전방 직진 300M</div>

        <br />
        
        <strong style={{ fontSize: "15px" }}>자가용 이용시</strong>
        <div>· "규수당 문래점", "문래동 SK리더스뷰" 검색</div>
        <div>· 주소 : 영등포구 문래로 164 SK리더스뷰 2층</div>
        <div>· 주차장 : 동시 300여대 주차 가능</div>
        
      </div>
    </div>
  );
}

export default MapSection;
