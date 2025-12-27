import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsOfService: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <section className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-black text-white mb-12">
          {t('tos_title')}
        </h1>
        
        <div className="space-y-12 text-white/60 leading-relaxed">
          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">
              {t('tos_acceptance_title')}
            </h2>
            <p>{t('tos_acceptance_content')}</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">
              {t('tos_license_title')}
            </h2>
            <p>{t('tos_license_content')}</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">
              {t('tos_responsibilities_title')}
            </h2>
            <p>{t('tos_responsibilities_content')}</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">
              {t('tos_registration_title')}
            </h2>
            <p>{t('tos_registration_content')}</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">
              {t('tos_liability_title')}
            </h2>
            <p>{t('tos_liability_content')}</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">
              {t('tos_changes_title')}
            </h2>
            <p>{t('tos_changes_content')}</p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-neutral mb-4">
              {t('tos_contact_title')}
            </h2>
            <p>{t('tos_contact_content')}</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
