'use client';

import React, { useEffect, useState } from 'react';
import { hasCookie, setCookie } from 'cookies-next';

const CookieConsent = (): JSX.Element | null => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
      <div className="fixed bottom-0 flex-col left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100 max-[600px]: gap-5 lg:flex-row">
        <span className="text-dark text-base">
          This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our Cookie
          Policy.
        </span>
        <button
          className="bg-green-500 py-2 px-8 rounded text-white w-full lg:w-min"
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
