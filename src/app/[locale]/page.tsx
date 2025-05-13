import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function HomePage() {
    const t = useTranslations('home');
    return (
        <div>
            <LocaleSwitcher />
            <h1>{t('title')}</h1>
            <h2>{t('name')}</h2>
        </div>
    );
}
