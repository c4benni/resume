export type DynamicObject<T> = {
  [key: string]: T;
};

export interface Content {
  title: string;
  from: string;
  // to || 'Current'
  to?: string;
  company: string;
  state: string;
  // country || 'Nigeria'
  country?: string;
  description: string[];
}
