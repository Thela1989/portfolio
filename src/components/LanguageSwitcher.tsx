import { SegmentedControl } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <SegmentedControl
      className="language-switcher"
      value={i18n.language}
      onChange={(value) => i18n.changeLanguage(value)}
      data={[
        { label: 'EN', value: 'en' },
        { label: 'SV', value: 'sv' },
      ]}
      radius="xl"
      size="xs"
    />
  );
}
