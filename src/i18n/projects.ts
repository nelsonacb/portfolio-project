import type { Locale } from './utils';
import { useTranslations } from './utils';

export interface ProjectText {
  title: string;
  description: string;
}

export function getProjectText(locale: Locale, id: string): ProjectText {
  const { t } = useTranslations(locale);
  const items = t.projects.items as Record<string, ProjectText>;
  const key = `project_${id}`;

  return (
    items[key] ?? {
      title: `Project ${id}`,
      description: '',
    }
  );
}
