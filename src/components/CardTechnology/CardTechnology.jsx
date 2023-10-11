import React from 'react'

import './CardTechnology.css'

import javaOraclePic from '../../images/java-oracle.svg'
import apachePic from '../../images/apache.svg'
import postgresqlPic from '../../images/postgresql.svg'
import perconaPic from '../../images/perconaxtradb-cluster.svg'
import centosPic from '../../images/centos.svg'
import oracledbPic from '../../images/oracledatabase.svg'
import oraclehttpPic from '../../images/oraclehttpserver.svg'
import oracleweblogicPic from '../../images/oracleweblogic.svg'
import oraclesbPic from '../../images/oracleservicebus.svg'
import hpPic from '../../images/hewletpackardenterprise.svg'

const images = {
  JAVAORACLEPIC: 'javaOraclePic',
  APACHEPIC: 'apachePic',
  POSTGRESQLPIC: 'postgresqlPic',
  PERCONAPIC: 'perconaPic',
  CENTOSPIC: 'centosPic',
  ORACLEDBPIC: 'oracledbPic',
  ORACLEHTTPPIC: 'oraclehttpPic',
  ORACLEWEBLOGICPIC: 'oracleweblogicPic',
  ORACLESBPIC: 'oraclesbPic',
  HPPIC: 'hpPic',
}

const imagesFields = {
  [images.JAVAORACLEPIC]: javaOraclePic,
  [images.APACHEPIC]: apachePic,
  [images.POSTGRESQLPIC]: postgresqlPic,
  [images.PERCONAPIC]: perconaPic,
  [images.CENTOSPIC]: centosPic,
  [images.ORACLEDBPIC]: oracledbPic,
  [images.ORACLEHTTPPIC]: oraclehttpPic,
  [images.ORACLEWEBLOGICPIC]: oracleweblogicPic,
  [images.ORACLESBPIC]: oraclesbPic,
  [images.HPPIC]: hpPic,
}

const CardTechnology = ({ title, image, numberBgColor, number, style }) => {
  return (
    <li
      className='card-technology'
      style={{'flexDirection': style}}
    >
      <p className='card-technology__text'>{title}</p>
      <img
        src={imagesFields[image]}
        alt='Картинка'
      />
      <div
        className='card-technology__number'
        style={{'backgroundColor': numberBgColor}}
      >
        {number}
      </div>
    </li>
  )
}

export { CardTechnology }