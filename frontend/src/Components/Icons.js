import React from 'react';
import { Icon } from '@iconify/react';

// ========================= CURRENT ICONS
export const raindropIcon = (
  <Icon icon='uil:raindrops' color='white' width='25' height='25' />
);

export const windIcon = (
  <Icon icon='bx:wind' color='white' width='25' height='25' />
);

// ========================= TAB ICONS
export const temperatureIcon = (
  <Icon
    icon='fluent:temperature-24-filled'
    color='white'
    width='25'
    height='25'
  />
);

export const sunIcon = (
  <Icon icon='eva:sun-fill' color='white' height='25' width='25' />
);

export const moonIcon = (
  <Icon icon='ci:moon' color='white' height='25' width='25' />
);

export const myInfo = (
  <Icon icon='bi:info-lg' color='white' height='25' width='25' />
);

// ========================= RELOAD ICON
function handleRefresh() {
  window.location.reload();
}

export const reload = (
  <Icon
    icon='foundation:refresh'
    color='white'
    height='20'
    width='20'
    className='reload'
    onClick={() => handleRefresh()}
  />
);

// ========================= INFO ICONS
export const GithubIcon = (
  <a
    href='https://github.com/s-arina/Weather_App_V2'
    target='_blank'
    rel='noreferrer'
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      viewBox='0 0 24 24'
      fill='none'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-github'
    >
      <title>GitHub</title>
      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
    </svg>
  </a>
);

export const LinkedInIcon = (
  <a
    href={'https://linkedin.com/in/sarinachang'}
    target='_blank'
    rel='noreferrer'
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      viewBox='0 0 24 24'
      fill='none'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-linkedin'
    >
      <title>LinkedIn</title>
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
      <rect x='2' y='9' width='4' height='12'></rect>
      <circle cx='4' cy='4' r='2'></circle>
    </svg>
  </a>
);

export const Portfolio = (
  <a href={'https://sarinachang.com'} target='_blank' rel='noreferrer'>
    <svg
      className='portfolio'
      viewBox='0 0 24 24'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
    >
      <circle cx='12' cy='12' r='9' />
      <path d='M12,3 C 8,3 8,21 12,21 C 16,21 16,3 12,3' />
      <path d='M3,12 C 3,8 21,8 21,12 C 21,16 3,16 3,12' />
    </svg>
  </a>
);
