export interface Action {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow?: string;
  title: string;
  description: string;

  primaryAction: Action;
  secondaryAction: Action;
}
