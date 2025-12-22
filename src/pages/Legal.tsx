
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Legal: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-black text-white mb-12">{t('legal_title')}</h1>
        
        <div className="space-y-12 text-white/60 leading-relaxed">
          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">1. Introduction</h2>
            <p>
              Welcome to the MFY event website. By accessing or using our website, you agree to comply with and be bound by these terms. 
              Our website is designed to provide information about the upcoming MFY event, including programs, speakers, and ticketing.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">2. Privacy Policy</h2>
            <p>
              Your privacy is important to us. We only collect personal information that you voluntarily provide via our contact forms. 
              This information is used solely for the purpose of communicating with you regarding the event and is never shared with third parties.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">3. Data Protection</h2>
            <p>
              We implement industry-standard security measures to protect the integrity of the information provided on our site. 
              All forms are handled securely and data is encrypted during transmission.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including logos, graphics, and text, is the property of MFY Events and protected by intellectual property laws. 
              Unauthorized use is strictly prohibited.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">5. Contact</h2>
            <p>
              If you have any questions about these terms, please contact us at legal@mfy-event.com.
            </p>
          </article>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-sm">
          Last updated: May 20, 2024
        </div>
      </section>
    </div>
  );
};

export default Legal;
