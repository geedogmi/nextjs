'use client';
import dynamic from 'next/dynamic';
import React from 'react';


// ClientButton 컴포넌트를 동적으로 가져오기
const ClientButton = dynamic(
  () => import('./api/ClientButton'), // 이 경로는 nextjs/app/lee/ClientButton.js를 가리킵니다.
  { ssr: false }
);


function Subpage() {
  const fetchBackendData = async (apiNumber) => {
    const apiEndpoint = `/api/Backend${apiNumber}`;

    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was an error fetching the data:', error);
    }
  };

  return (
    <div className="subpage">
      <header className="subpage-header">
        <h1 className="subpage-title">서브페이지 제목</h1>
        <p className="subpage-date">게시일: October 3, 2023</p>
      </header>

      <main className="subpage-content">
        {/* 관련된 포스트들을 나타내는 섹션 */}
        <section className="related-posts">
          <h3>관련된 포스트들</h3>
          <ClientButton onClick={() => fetchBackendData(1)} text="Docker API" />
          <ClientButton onClick={() => fetchBackendData(2)} text="Kubernetes API" />  
        </section>

        {/* 댓글 섹션 */}
        <section className="comments-section">
          {/* 댓글 목록, 작성 폼 등을 표시할 수 있습니다. */}
        </section>
      </main>

      {/* 푸터 부분 */}
      <footer className="subpage-footer">
        &copy;2023 My Blog. All rights reserved.
      </footer>
    </div>
  );
}

export default Subpage;