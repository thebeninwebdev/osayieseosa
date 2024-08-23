import {locales} from './config'

export type Locale = (typeof locales)[number]

export interface Animations {
    title: string;
    link: string;
    defaultLink: string;
  }
export interface Anchors {
  href:string;
  title?:string;
  className?: string;
  icon?: React.JSX.Element | React.ReactNode;
}

export interface ProjectsObject {
  title:string;
  description:string;
  img:string;
  link:string;
  iconLists:string[];
}