import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './SidebarMenu.css'

const SidebarMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(true)

  return (
    <nav className={`sidebar-menu ${isShowMenu && "close"}`}>
      <ul className='sidebar-menu__list'>
        <li className='sidebar-menu__item'>
          <Link
            to='/'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8745 16.2494V12.4993C11.8745 12.3335 11.8087 12.1746 11.6915 12.0574C11.5743 11.9401 11.4153 11.8743 11.2495 11.8743H8.74954C8.58378 11.8743 8.42481 11.9401 8.3076 12.0574C8.19039 12.1746 8.12454 12.3335 8.12454 12.4993V16.2494C8.12454 16.4151 8.0587 16.5741 7.94151 16.6913C7.82432 16.8085 7.66537 16.8744 7.49962 16.8744L3.75008 16.8749C3.668 16.8749 3.58671 16.8587 3.51088 16.8273C3.43504 16.7959 3.36613 16.7499 3.30809 16.6918C3.25004 16.6338 3.204 16.5649 3.17258 16.4891C3.14117 16.4132 3.125 16.3319 3.125 16.2499V9.0264C3.125 8.93932 3.14319 8.85321 3.17842 8.77358C3.21364 8.69394 3.26511 8.62255 3.32954 8.56397L9.57911 2.88157C9.69415 2.77696 9.84406 2.719 9.99955 2.71899C10.155 2.71899 10.3049 2.77694 10.42 2.88154L16.6704 8.56397C16.7349 8.62255 16.7863 8.69395 16.8216 8.77358C16.8568 8.85322 16.875 8.93934 16.875 9.02642V16.2499C16.875 16.332 16.8588 16.4132 16.8274 16.4891C16.796 16.5649 16.75 16.6338 16.6919 16.6918C16.6339 16.7499 16.565 16.7959 16.4891 16.8273C16.4133 16.8587 16.332 16.8749 16.2499 16.8749L12.4995 16.8744C12.3337 16.8744 12.1748 16.8085 12.0576 16.6913C11.9404 16.5741 11.8745 16.4151 11.8745 16.2494V16.2494Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Главная</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='ychet'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 6.875V15.6944C17.5 15.8418 17.4415 15.9831 17.3373 16.0873C17.2331 16.1915 17.0918 16.25 16.9444 16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V5C2.5 4.83424 2.56585 4.67527 2.68306 4.55806C2.80027 4.44085 2.95924 4.375 3.125 4.375H7.29167C7.4269 4.375 7.55848 4.41886 7.66667 4.5L9.83333 6.125C9.94152 6.20614 10.0731 6.25 10.2083 6.25H16.875C17.0408 6.25 17.1997 6.31585 17.3169 6.43306C17.4342 6.55027 17.5 6.70924 17.5 6.875Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Учет сведений</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='budjet'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 4.375H2.5C2.15482 4.375 1.875 4.65482 1.875 5V15C1.875 15.3452 2.15482 15.625 2.5 15.625H17.5C17.8452 15.625 18.125 15.3452 18.125 15V5C18.125 4.65482 17.8452 4.375 17.5 4.375Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.1245 13.125H15.6245" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.37451 13.125H10.6245" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.87451 7.56653H18.1245" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Бюджетные заявки</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='expertise'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.4375 11.1932V4.0625C3.4375 3.89674 3.50335 3.73777 3.62056 3.62056C3.73777 3.50335 3.89674 3.4375 4.0625 3.4375H15.9375C16.1033 3.4375 16.2622 3.50335 16.3794 3.62056C16.4967 3.73777 16.5625 3.89674 16.5625 4.0625V15.9375C16.5625 16.1033 16.4967 16.2622 16.3794 16.3794C16.2622 16.4967 16.1033 16.5625 15.9375 16.5625H10.5966" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 11.875L5 16.875L2.5 14.375" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Экспертиза НТД</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='poisk'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.7026 13.7031L17.4996 17.5" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Поиск по файлам</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='klassifikator'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.125 14.375H8.125" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.625 11.875V16.875" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.125 5.625H3.125" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.875 13.1301H11.875" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.875 15.6199H11.875" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.25 3.75L12.5 7.5" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.25 7.5L12.5 3.75" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Классификатор</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='stek'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.99978 16.875C4.9177 16.875 4.83643 16.8589 4.7606 16.8274C4.68477 16.796 4.61587 16.75 4.55784 16.692C4.4998 16.6339 4.45376 16.565 4.42235 16.4892C4.39095 16.4134 4.37478 16.3321 4.37478 16.25L4.37482 12.9145C4.0414 13.0724 3.67346 13.1434 3.30522 13.121C2.93698 13.0985 2.58041 12.9832 2.26867 12.786C1.95693 12.5887 1.70015 12.3157 1.52222 11.9926C1.34428 11.6694 1.25098 11.3064 1.25098 10.9375C1.25098 10.5686 1.34428 10.2057 1.52222 9.88248C1.70015 9.5593 1.95693 9.28637 2.26867 9.08908C2.58041 8.8918 2.93698 8.77656 3.30522 8.75408C3.67346 8.73161 4.0414 8.80263 4.37482 8.96055L4.37478 5.62503C4.37478 5.54295 4.39095 5.46167 4.42236 5.38584C4.45377 5.31001 4.4998 5.24111 4.55784 5.18308C4.61588 5.12504 4.68478 5.079 4.76061 5.04759C4.83644 5.01618 4.91771 5.00002 4.99979 5.00002L8.6478 5.00006C8.48989 4.66664 8.41886 4.2987 8.44134 3.93046C8.46381 3.56222 8.57905 3.20565 8.77634 2.89391C8.97363 2.58217 9.24656 2.32539 9.56974 2.14746C9.89292 1.96953 10.2558 1.87622 10.6248 1.87622C10.9937 1.87622 11.3566 1.96953 11.6798 2.14746C12.003 2.32539 12.2759 2.58217 12.4732 2.89391C12.6705 3.20565 12.7857 3.56222 12.8082 3.93046C12.8307 4.2987 12.7597 4.66664 12.6017 5.00006L16.2497 5.00002C16.4155 5.00002 16.5745 5.06586 16.6917 5.18307C16.8089 5.30028 16.8747 5.45925 16.8748 5.62501L16.8748 8.96055C16.5414 8.80263 16.1734 8.73161 15.8052 8.75408C15.437 8.77655 15.0804 8.8918 14.7686 9.08908C14.4569 9.28637 14.2001 9.5593 14.0222 9.88248C13.8443 10.2057 13.7509 10.5686 13.7509 10.9375C13.7509 11.3064 13.8443 11.6694 14.0222 11.9926C14.2001 12.3157 14.4569 12.5887 14.7686 12.786C15.0804 12.9832 15.437 13.0985 15.8052 13.121C16.1734 13.1434 16.5414 13.0724 16.8748 12.9145L16.8748 16.25C16.8747 16.4158 16.8089 16.5748 16.6917 16.692C16.5745 16.8092 16.4155 16.875 16.2498 16.875L4.99978 16.875Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Стэк руководство</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='gos-spravochniki'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 17.5C3.75 17.0027 3.94754 16.5258 4.29917 16.1742C4.65081 15.8225 5.12772 15.625 5.625 15.625H16.25V2.5H5.625C5.12772 2.5 4.65081 2.69754 4.29917 3.04917C3.94754 3.40081 3.75 3.87772 3.75 4.375V17.5Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.75 17.5V18.125H15" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.75 2.5V10L11.2495 8.125L8.75 10V2.5" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Гос. справочники</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='arhitektyra-go'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6251 17.5H4.37451C4.20875 17.5 4.04978 17.4342 3.93257 17.3169C3.81536 17.1997 3.74951 17.0408 3.74951 16.875V3.125C3.74951 2.95924 3.81536 2.80027 3.93257 2.68306C4.04978 2.56585 4.20875 2.5 4.37451 2.5H11.8751L16.2501 6.875V16.875C16.2501 16.9571 16.234 17.0383 16.2025 17.1142C16.1711 17.19 16.1251 17.2589 16.0671 17.3169C16.009 17.375 15.9401 17.421 15.8643 17.4524C15.7885 17.4838 15.7072 17.5 15.6251 17.5Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.875 2.5V6.875H16.2506" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Архитектура ГО</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='hranilishe-doc'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.875 3.75H3.125C2.77982 3.75 2.5 4.02982 2.5 4.375V6.875C2.5 7.22018 2.77982 7.5 3.125 7.5H16.875C17.2202 7.5 17.5 7.22018 17.5 6.875V4.375C17.5 4.02982 17.2202 3.75 16.875 3.75Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.25 7.5V15.625C16.25 15.7908 16.1842 15.9497 16.0669 16.0669C15.9497 16.1842 15.7908 16.25 15.625 16.25H4.375C4.20924 16.25 4.05027 16.1842 3.93306 16.0669C3.81585 15.9497 3.75 15.7908 3.75 15.625V7.5" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.125 10.625H11.875" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Хранилище документов</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='ocenka-deyatelnosti-go'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2.5L11.8912 7.39699L17.1329 7.68237L13.06 10.9943L14.4084 16.0676L10 13.2175L5.59161 16.0676L6.93998 10.9943L2.86708 7.68237L8.1088 7.39699L10 2.5Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Оценка деятельности ГО</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='componenty-deyatelnosti'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5.625H6.55336C6.65285 5.625 6.75089 5.64875 6.83935 5.69427C6.92781 5.73979 7.00412 5.80577 7.06195 5.88673L12.9381 14.1133C12.9959 14.1942 13.0722 14.2602 13.1606 14.3057C13.2491 14.3513 13.3472 14.375 13.4466 14.375H18.125" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.25 3.75L18.125 5.625L16.25 7.5" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.25 12.5L18.125 14.375L16.25 16.25" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.5361 7.84942L12.9381 5.88673C12.9959 5.80577 13.0722 5.73979 13.1607 5.69427C13.2491 5.64875 13.3472 5.625 13.4466 5.625H18.125" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 14.375H6.55336C6.65285 14.375 6.75089 14.3512 6.83935 14.3057C6.92781 14.2602 7.00412 14.1942 7.06195 14.1133L8.46387 12.1506" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Компоненты деятельности</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='subjecty-informatizacii'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 7.5H17.5L10 2.5L2.5 7.5Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.375 7.5V13.75" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.125 7.5V13.75" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.875 7.5V13.75" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.625 7.5V13.75" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 13.75H17.5" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.25 16.25H18.75" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Субъекты информатизации</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='ypravlenie-spravochnikami'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6.875C10 6.21196 10.2634 5.57607 10.7322 5.10723C11.2011 4.63839 11.837 4.375 12.5 4.375H17.5C17.6658 4.375 17.8247 4.44085 17.9419 4.55806C18.0592 4.67527 18.125 4.83424 18.125 5V15C18.125 15.1658 18.0592 15.3247 17.9419 15.4419C17.8247 15.5592 17.6658 15.625 17.5 15.625H12.5C11.837 15.625 11.2011 15.8884 10.7322 16.3572C10.2634 16.8261 10 17.462 10 18.125" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.875 15C1.875 15.1658 1.94085 15.3247 2.05806 15.4419C2.17527 15.5592 2.33424 15.625 2.5 15.625H7.5C8.16304 15.625 8.79893 15.8884 9.26777 16.3572C9.73661 16.8261 10 17.462 10 18.125V6.875C10 6.21196 9.73661 5.57607 9.26777 5.10723C8.79893 4.63839 8.16304 4.375 7.5 4.375H2.5C2.33424 4.375 2.17527 4.44085 2.05806 4.55806C1.94085 4.67527 1.875 4.83424 1.875 5V15Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Управление справочниками</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='otchety'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.125 1.875H6.875V5H13.125V1.875Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.125 3.125H15.625C15.7908 3.125 15.9497 3.19085 16.0669 3.30806C16.1842 3.42527 16.25 3.58424 16.25 3.75V16.875C16.25 17.0408 16.1842 17.1997 16.0669 17.3169C15.9497 17.4342 15.7908 17.5 15.625 17.5H4.375C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875V3.75C3.75 3.58424 3.81585 3.42527 3.93306 3.30806C4.05027 3.19085 4.20924 3.125 4.375 3.125H6.875" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Отчеты</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='novosti'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.875 7.5H15" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.875 10H15" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.875 12.5H15" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 16.25C2.83152 16.25 3.14946 16.1183 3.38388 15.8839C3.6183 15.6495 3.75 15.3315 3.75 15V4.375C3.75 4.20924 3.81585 4.05027 3.93306 3.93306C4.05027 3.81585 4.20924 3.75 4.375 3.75H17.5C17.6658 3.75 17.8247 3.81585 17.9419 3.93306C18.0592 4.05027 18.125 4.20924 18.125 4.375V15C18.125 15.3315 17.9933 15.6495 17.7589 15.8839C17.5245 16.1183 17.2065 16.25 16.875 16.25H2.5Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 16.25C2.16848 16.25 1.85054 16.1183 1.61612 15.8839C1.3817 15.6495 1.25 15.3315 1.25 15V6.25" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Новости</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='razrabotka-arhitektyri'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6251 17.5H4.37451C4.20875 17.5 4.04978 17.4342 3.93257 17.3169C3.81536 17.1997 3.74951 17.0408 3.74951 16.875V3.125C3.74951 2.95924 3.81536 2.80027 3.93257 2.68306C4.04978 2.56585 4.20875 2.5 4.37451 2.5H11.8751L16.2501 6.875V16.875C16.2501 16.9571 16.234 17.0383 16.2025 17.1142C16.1711 17.19 16.1251 17.2589 16.0671 17.3169C16.009 17.375 15.9401 17.421 15.8643 17.4524C15.7885 17.4838 15.7072 17.5 15.6251 17.5Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.875 2.5V6.875H16.2506" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Разработка архитектуры</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='zapros-ishodnogo-koda'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 6.875L1.25 10L5 13.125" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 6.875L18.75 10L15 13.125" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 3.125L7.5 16.875" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Запрос исходного кода</span>
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link
            to='polzovateli'
            className='sidebar-menu__item-link'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.875 12.5C9.11866 12.5 10.9375 10.6812 10.9375 8.4375C10.9375 6.19384 9.11866 4.375 6.875 4.375C4.63134 4.375 2.8125 6.19384 2.8125 8.4375C2.8125 10.6812 4.63134 12.5 6.875 12.5Z" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.1416 4.52634C12.7004 4.36891 13.2864 4.33305 13.8602 4.42117C14.434 4.50929 14.9822 4.71934 15.468 5.03719C15.9538 5.35503 16.3658 5.77329 16.6763 6.26378C16.9868 6.75427 17.1886 7.30561 17.2681 7.88066C17.3476 8.45571 17.303 9.04112 17.1372 9.59746C16.9714 10.1538 16.6883 10.6682 16.307 11.1059C15.9256 11.5436 15.4549 11.8945 14.9266 12.135C14.3982 12.3755 13.8244 12.4999 13.2439 12.5" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.24951 15.4216C1.88399 14.5191 2.7263 13.7825 3.70533 13.274C4.68436 12.7655 5.77137 12.5 6.87458 12.5C7.97779 12.5 9.06481 12.7654 10.0439 13.2738C11.0229 13.7822 11.8653 14.5187 12.4999 15.4212" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.2441 12.5C14.3475 12.4992 15.4347 12.7643 16.4139 13.2728C17.393 13.7813 18.2352 14.5182 18.8692 15.4212" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Пользователи</span>
          </Link>
        </li>
        <li
          onClick={() => setIsShowMenu((prev) => !prev)}
          className='sidebar-menu__item'
        >
          <div className='sidebar-menu__item-link'>
            <svg className='sidebar-menu__hide-icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5Z" stroke="#727FA2" strokeWidth="1.5" strokeMiterlimit="10"/>
              <path d="M10.9375 7.1875L7.8125 10L10.9375 12.8125" stroke="#727FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='sidebar-menu__item-text'>Скрыть</span>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export { SidebarMenu }